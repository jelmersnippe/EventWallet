import RNFetchBlob from 'rn-fetch-blob'
import { getToken, RefreshToken } from './AuthAPI'

export const APIRequest = async (method, URL, requiresToken = false, body = null, contentType = 'application/json') => {
    return new Promise((resolve, reject) => {
        let headers = {
            'Content-Type': contentType
        }

        URL = 'https://' + URL

        if(requiresToken){
            headers['x-access-token'] = getToken()
        } 

        Request(method, URL, headers, body)
        .then(response => {
            resolve(response)
        })
        .catch(error => reject(error))
    })
}

const Request = async (method, URL, headers, body) => {
    if(body){
        body = JSON.stringify(body)
    }

    return new Promise((resolve,reject) => {
        RNFetchBlob.config({
            trusty: true
        }).fetch(method, URL, headers, body)
        .then(response => {
            ProcessResponse(response)
            .then(data => {
                resolve(data)
            })
            .catch(error => {
                if(error == 'Retry'){
                    Request(URL, headers, body)
                        .then(response => resolve(response))
                        .catch(error => reject(error))
                    reject(error)
                } else {
                    reject(error)
                }
            })
        })
        .catch(error => {
            console.log(error)
        })
    })
}

const ProcessResponse = (response) => {
    return new Promise((resolve, reject) => {
        let responseData = ''
        if (response.respInfo.respType == 'json'){
            responseData = (JSON.parse(response.data))
        } else {
            responseData = response.data
        }

        if (response.respInfo.status == 200){
            resolve(responseData)
        } 

        else if (response.respInfo.status == 401) {
            //alert(response.respInfo.redirects[0] + '\n\n403 response: ' + responseData)
            reject(responseData.message)

        } else if (response.respInfo.status == 403) {
            //alert(response.respInfo.redirects[0] + '\n\n403 response: ' + responseData)

            // Token has expired: Refresh the token and then retry request
            reject('WiP')
            // RefreshToken(33333)
            // .then(refreshedToken => {
            //     setToken(refreshedToken)

            //     // Build headers for retry request
            //     let retryHeaders = response.respInfo.headers
            //     retryHeaders['x-access-token'] = refreshedToken

            //     // Re send Request
            //     Request('POST', response.respInfo.redirects[0], retryHeaders)
            //     .then(response => resolve(response))
            //     .catch(error => reject(error))
            // })
            // .catch(error => {
            //     reject(error)
            // })
            
        } else {
            //alert(response.respInfo.redirects[0] + '\n\n' + response.respInfo.status + ' response: ' + responseData)
            reject(responseData)
        }
    })
}