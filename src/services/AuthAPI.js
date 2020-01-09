import { AsyncStorage } from 'react-native'
import RNFetchBlob from 'rn-fetch-blob'
import { APIRequest } from './APIRequest'
const base64 = require('base-64')

const ip = '145.24.222.83'
const port = '3304'

const userKey = 'AuthToken'

let currentToken = ''

const onSignIn = (token) => {
    AsyncStorage.setItem(userKey, token)
    setToken(token)
}

export const getToken = () => {
    return currentToken
}

export const setToken = (token) => {
    currentToken = token
}

export const SignUp = (username, password, email) => {
    let bodyData = {
        "username": username,
        "password": password,
        "email": email
    }

    return APIRequest('POST', ip, port, '/register', false, bodyData)
} 

export const SignIn = (username, password) => {
    return new Promise((resolve, reject) => {
        let authString = base64.encode(username + ':' + password)
    
        RNFetchBlob.config({
            trusty: true
        })
            .fetch('GET', 'https://' + ip + ':' + port + '/login', {
                Authorization: 'Basic ' + authString,
            })
            .then(response => {
    
                if (response.respInfo.status == 200) {
                    onSignIn(JSON.parse(response.data).token)
                    resolve()
                } else {
                    console.log('SignIn failed:')
                    console.log(JSON.stringify(response, null, 4))
                    reject(response.data)
                }
            })
            .catch(error => reject(error))
    })
}

export const isSignedIn = async () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(userKey)
            .then(authToken => {
                if (authToken !== null) {
                    onSignIn(authToken)
                    resolve(authToken)
                } else {
                    resolve(false);
                }
            })
            .catch(error => reject(error));
    });
};
