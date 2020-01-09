import RNFetchBlob from 'rn-fetch-blob'
import { setToken, getToken, RefreshToken } from './AuthAPI'

export const APIRequest = async (method, ip, port, route, requiresToken = false, body = null, contentType = 'application/json') => {
    return new Promise((resolve, reject) => {

        let URL = 'https://' + ip
        if(port != null){
            URL += ':' + port
        }
        URL += route

        let headers = {
            'Content-Type': contentType
        }

        if(requiresToken){
            console.log('Token for current request: \n' + getToken())
            headers['x-access-token'] = getToken()
        } 

        if(method == 'GET'){
            GetRequest(URL, headers)
            .then(response => resolve(response))
            .catch(error => reject(error))
        } else if (method == 'POST') {
            PostRequest(URL, headers, body)
            .then(response => resolve(response))
            .catch(error => reject(error))
        } else {
            reject('Allowed methods are GET and POST')
        }
    })
}

const GetRequest = async (URL, headers) => {
    return new Promise((resolve,reject) => {
        RNFetchBlob.config({
            trusty: true
        }).fetch('GET', URL, headers, null)
        .then(response => {
            ProcessResponse(response).then(data => {
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        })
        .catch(error => {
            console.log(error)
        })
    })
}

const PostRequest = async (URL, headers, body) => {
    return new Promise((resolve,reject) => {
        RNFetchBlob.config({
            trusty: true
        }).fetch('POST', URL, headers, JSON.stringify(body))
        .then(response => {
            ProcessResponse(response).then(data => {
                resolve(data)
            }).catch(error => {
                if(error == 'Retry'){
                    console.log('Have to retry request here')
                    console.log('Current token in memory: \n' + getToken())
                    // PostRequest(URL, headers, body)
                    //     .then(response => resolve(response))
                    //     .catch(error => reject(error))
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
            alert(response.respInfo.redirects[0] + '\n\n403 response: ' + responseData)
            reject(responseData.message)

        } else if (response.respInfo.status == 403) {
            console.log('Token was valid, but expired. Send refresh request, then save it')
            alert(response.respInfo.redirects[0] + '\n\n403 response: ' + responseData)

            RefreshToken(12345)
            .then(refreshedToken => {
                setToken(refreshedToken)
                console.log('Status 200 - Retry request with refreshed token: \n' + refreshedToken)
                let retryHeaders = response.respInfo.headers
                retryHeaders['x-access-token'] = refreshedToken

                PostRequest(response.respInfo.redirects[0], retryHeaders)
                .then(response => resolve(response))
                .catch(error => reject(error))
            })
            .catch(error => {
                reject(error)
            })
        } else {
            alert(response.respInfo.redirects[0] + '\n\n' + response.respInfo.status + ' response: ' + responseData)
            reject(responseData)
        }
    })
}