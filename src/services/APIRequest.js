import RNFetchBlob from 'rn-fetch-blob'
import { SetToken, GetToken, GetPin, RefreshToken, SignOut } from './AuthAPI'

export const APIRequest = async (method, URL, requiresToken = false, body = null, contentType = 'application/json') => {
    return new Promise((resolve, reject) => {
        let headers = {
            'Content-Type': contentType
        }

        URL = 'https://' + URL

        let request = {
            "method": method,
            "URL": URL,
            "headers": headers,
            "body": body
        }

        if (requiresToken) {
            GetToken().then(authToken => {
                request.headers['x-access-token'] = authToken

                Request(request)
                .then(response => {
                    resolve(response)
                })
                .catch(error => reject(error))
            }).catch(error => {
                reject(error)
            })
        }
        else{
            Request(request)
            .then(response => {
                resolve(response)
            })
            .catch(error => reject(error))
        }
    })
}

const Request = async (request) => {
    return new Promise((resolve, reject) => {
        RNFetchBlob.config({
            trusty: true
        })
        .fetch(request.method, request.URL, request.headers, JSON.stringify(request.body))
            .then(response => {
                ProcessResponse(response, request)
                    .then(data => {
                        resolve(data)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
            .catch(error => {
                reject(error)
            })
    })
}

const ProcessResponse = (response,request) => {
    return new Promise((resolve, reject) => {
        let responseData = ''
        if (response.respInfo.respType == 'json') {
            responseData = (JSON.parse(response.data))
        } else {
            responseData = response.data
        }

        console.log('\n\n\t--- REQUEST INFO ---')
        console.log(JSON.stringify(request, null, 4))

        console.log('\n\t--- RESPONSE INFO ---')
        console.log(response.respInfo.status + ' response: ')
        console.log(responseData)

        if (response.respInfo.status == 200) {
            // REQUEST WAS SUCCESSFUL
            // return the data in the response

            resolve(responseData)
        }
        
        else if (response.respInfo.status == 401) {
            // TOKEN IS INVALID
            // Force user to be logged out
            // logOut() from index.js
            alert('Invalid token, maak dat je wegkomt schooier!')
            SignOut().then(
                reject(responseData.message)
            )
    
        } else if (response.respInfo.status == 402) {
            reject(responseData)

        } else if (response.respInfo.status == 403) {
            // TOKEN HAS EXPIRED
            // Refresh the token and then retry request

            // Check if there is a pin saved in memory
            // This will be true if the user already entered his pin this session


            // NO PIN IN MEMORY
            // force the user to enter his pin to refresh the token
            // checkPin() from index.js

            if(GetPin() == undefined){
                reject(responseData)

            // PIN IN MEMORY
            // Attempt to refresh the token with the pin from memory
            } else {
                RefreshToken(GetPin())
                .then(refreshedToken => {
                    // Refreshed the token with pin from memory
                    // Set the token in memory then retry
                    // the previous request with the new token
                    SetToken(refreshedToken)
                    request.headers['x-access-token'] = refreshedToken

                    Request(request)
                        .then(response => resolve(response))
                        .catch(error => reject(error))
                })
                .catch(error => {
                    // Failed to refresh token with the pin in memory
                    // Log the user logOut
                    // lofOut() from index.js

                    reject(error)
                })
            }
        } else {
            // UNKNOWN ERROR CODE
            // Reject with the data in the response
            reject(responseData)
        } 
    })
}