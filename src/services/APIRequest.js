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
                } else if (method == 'POST') {
                    PostRequest(URL, headers, body)
                    .then(response => resolve(response))
                } else {
                    reject('Allowed methods are GET and POST')
                }
            })

        } else {
            if(method == 'GET'){
                GetRequest(URL, headers)
                .then(response => resolve(response))
            } else if (method == 'POST') {
                PostRequest(URL, headers, body)
                .then(response => resolve(response))
            } else {
                reject('Allowed methods are GET and POST')
            }
        }
    })
}

const GetRequest = async (URL, headers) => {
    return new Promise((resolve) => {
        RNFetchBlob.config({
            trusty: true
        }).fetch('GET', URL, headers, null)
        .then(response => {
            console.log(response)
            ProcessResponse(response).then(data => {
                resolve(data)
            }).catch(error => {
                console.log(error)
            })
        })
        .catch(error => {
            console.log(error)
        })
    })
}

const PostRequest = async (URL, headers, body) => {
    return new Promise((resolve) => {
        RNFetchBlob.config({
            trusty: true
        }).fetch('POST', URL, headers, JSON.stringify(body))
        .then(response => {
            ProcessResponse(response).then(data => {
                resolve(data)
            }).catch(error => {
                console.log(error)
            })
        })
        .catch(error => {
            console.log(error)
        })
    })
}

const ProcessResponse = (response) => {
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