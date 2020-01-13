import AsyncStorage from '@react-native-community/async-storage'
import RNFetchBlob from 'rn-fetch-blob'
import { APIRequest } from './APIRequest'
const base64 = require('base-64')

const ip = '145.24.222.83'
const port = '3304'

const userKey = 'AuthToken'

let pin = undefined

export const GetToken = async () => {
    return await AsyncStorage.getItem(userKey)
}

export const GetPin = () => {
    return pin
}

export const SetPin = (newPin) => {
    pin = newPin
}

export const SetToken = async (token) => {
    return await AsyncStorage.setItem(userKey, token)
}

export const SignOut = async () => {
    SetPin(undefined)
    return await AsyncStorage.removeItem(userKey)
}


export const SignUp = (username, password, email, pin) => {
    let bodyData = {
        "username": username,
        "password": password,
        "email": email,
        "pin": pin
    }

    return APIRequest('POST', ip + ':' + port + '/register', false, bodyData)
} 

export const RefreshToken = (pin) => {
    let bodyData = {
        "pin": pin
    }

    return APIRequest('POST', ip + ':' + port + '/refresh/token', true, bodyData)
}

export const ValidatePin = (pin) => {
    let bodyData = {
        "pin": pin
    }

    return APIRequest('POST', ip + ':' + port + '/pin/validate', true, bodyData)
}

export const ValidateToken = (token) => {
    return new Promise((resolve, reject) => {

        RNFetchBlob.config({
            trusty: true
        })
        .fetch('GET', 'https://' + ip + ':' + port + '/token/validate', {
            'Content-type': 'application/json',
            'x-access-token': token
        })
        .then(response => {

            console.log('\n\t--- RESPONSE INFO ---')
            console.log(response.respInfo.redirects[0])
            console.log(response.respInfo.status + ' response: ')
            console.log(response.data)

            if (response.respInfo.status == 200 || response.respInfo.status == 403) {
                resolve(response.data)
            } else {
                reject(JSON.parse(response.data).message)
            }
        })
        .catch(error => {
            reject(error)
        })
    })
}

export const SignIn = (email, password) => {
    return new Promise((resolve, reject) => {
        let authString = base64.encode(email + ':' + password)
    
        RNFetchBlob.config({
            trusty: true
        })
        .fetch('GET', 'https://' + ip + ':' + port + '/login', {
            Authorization: 'Basic ' + authString,
        })
        .then(response => {

            console.log('\n\t--- RESPONSE INFO ---')
            console.log(response.respInfo.redirects[0])
            console.log(response.respInfo.status + ' response: ')
            console.log(response.data)

            if (response.respInfo.status == 200) {
                SetToken(response.data).then(
                    resolve()
                ).catch(error => console.log(error))
            } else {
                reject(response.data)
            }
        })
        .catch(error => {
            reject(error)
        })
    })
}

export const isSignedIn = async () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(userKey)
            .then(authToken => {
                if (authToken !== null) {
                    console.log('AuthToken found: ' + authToken)
                    ValidateToken(authToken).then(response => {
                        resolve(true)
                    }).catch(error => {
                        reject(error)
                    })
                } else {
                    console.log('No AuthToken found')
                    reject()
                }
            })
            .catch(error => {
                reject(error)
            });
    });
};

