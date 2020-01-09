import RNFetchBlob from 'rn-fetch-blob'
import { isSignedIn } from './Auth'

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
            isSignedIn().then(authToken => {
                headers['x-access-token'] = authToken

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

        } else {
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


    console.log(URL)
    console.log(headers)
    console.log(body)

    return new Promise((resolve,reject) => {
        RNFetchBlob.config({
            trusty: true
        }).fetch('POST', URL, headers, JSON.stringify(body))
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

const ProcessResponse = (response) => {
    console.log(JSON.stringify(response, null, 4))
    return new Promise((resolve, reject) => {
        if(response.respInfo.status == 200){
            if(response.respInfo.respType == 'json'){
                resolve(JSON.parse(response.data))
            } else {
                resolve(response.data)
            }
        } 
        else if (response.respInfo.status == 401) {
            reject(JSON.parse(response.data).message)
        } else {
            reject(response.data)
        }
    })
}