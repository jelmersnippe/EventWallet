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

export const isSignedIn = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(userKey)
            .then(response => {
                if (response !== null) {
                    console.log('AuthToken found: ' + response)
                    resolve(true);
                } else {
                    console.log('No AuthToken found')
                    resolve(false);
                }
            })
            .catch(error => reject(error));
    });
};