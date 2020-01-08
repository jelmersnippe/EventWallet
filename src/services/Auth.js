import { AsyncStorage } from 'react-native'
import RNFetchBlob from 'rn-fetch-blob'
const base64 = require('base-64')

const ip = '145.24.222.83'
const port = '3304'

const userKey = 'AuthToken'

const onSignIn = (token) => {
    AsyncStorage.setItem(userKey, token)
}

const onSignOut = () => {
    AsyncStorage.removeItem(userKey);
}

export const SignIn = (username, password) => {
    return new Promise((resolve, reject) => {
        console.log('User: ' + username)
        console.log('Pass: ' + password)
    
        let authString = base64.encode(username + ':' + password)
    
        RNFetchBlob.config({
            trusty: true
        })
            .fetch('GET', 'https://' + ip + ':' + port + '/login', {
                Authorization: 'Basic ' + authString,
            })
            .then(response => {
                console.log(JSON.stringify(response, null, 4))
    
                if (response.respInfo.status == 200) {
                    onSignIn(JSON.parse(response.data).token)
                    resolve(true)
                } else {
                    resolve(false)
                }
            })
            .catch(error => reject(error))
    })
}

export const SignUp = (username, password, email) => {
    return new Promise((resolve, reject) => {
        console.log('User: ' + username)
        console.log('Pass: ' + password)
        console.log('Email: ' + email)
    
        let registerData = {
            "username": username,
            "password": password,
            "email": email
        }

        RNFetchBlob.config({
            trusty: true
        })
            .fetch('POST', 'https://' + ip + ':' + port + '/register', {
                'Content-Type': 'application/json'
            }, JSON.stringify(registerData))
            .then(response => {
                console.log(JSON.stringify(response, null, 4))

                // Clean this up to handle failed registrations with a different status code (Like Login)
                if(response.respInfo.status == 200){
                    resolve(true)
                } else {
                    resolve(response.data)
                }
                
            })
            .catch(error => reject(error))
    })
}

export const isSignedIn = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(userKey)
            .then(response => {
                if (response !== null) {
                    console.log('AuthToken found: ' + response)
                    resolve(response);
                } else {
                    console.log('No AuthToken found')
                    resolve(false);
                }
            })
            .catch(error => reject(error));
    });
};