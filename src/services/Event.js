import RNFetchBlob from 'rn-fetch-blob'
import { isSignedIn } from './Auth'

const ip = '145.24.222.83'
const port = '3307'

export const GetWalletLink = (event) => {
    return new Promise((resolve, reject) => {

        let bodyData = {
            "event": event
        }

        isSignedIn().then(authToken => {
            RNFetchBlob.config({
                trusty: true
            }).fetch('POST', 'https://' + ip + ':' + port + '/wallet/user', {
                    'Content-Type': 'application/json',
                    'x-access-token': authToken
                }, JSON.stringify(bodyData))
                .then(response => {
                    if(response.respInfo.status == 200){
                        resolve(JSON.parse(response.data))
                    } else {
                        console.log(JSON.stringify(response))
                        reject(response.data)
                    }
                })
                .catch(error => console.log(error))
        })
    })
}

export const GetWristband = (event) => {
    return new Promise((resolve, reject) => {

        let bodyData = {
            "event": event
        }

        isSignedIn().then(authToken => {
            RNFetchBlob.config({
                trusty: true
            }).fetch('POST', 'https://' + ip + ':' + port + '/wristband', {
                    'Content-Type': 'application/json',
                    'x-access-token': authToken
                }, JSON.stringify(bodyData))
                .then(response => {
                    if(response.respInfo.status == 200){
                        resolve(JSON.parse(response.data))
                    } else {
                        console.log(JSON.stringify(response))
                        reject(response.data)
                    }
                })
                .catch(error => console.log(error))
        })
    })
}

export const UpdateWristband = (event) => {
    return new Promise((resolve, reject) => {

        let bodyData = {
            "event": event
        }

        isSignedIn().then(authToken => {
            RNFetchBlob.config({
                trusty: true
            }).fetch('POST', 'https://' + ip + ':' + port + '/wristband/update', {
                    'Content-Type': 'application/json',
                    'x-access-token': authToken
                }, JSON.stringify(bodyData))
                .then(response => {
                    console.log(JSON.stringify(response, null, 4))
                    if(response.respInfo.status == 200){
                        resolve(JSON.parse(response.data))
                    } else {
                        console.log(JSON.stringify(response, 4, null))
                        reject(response.data)
                    }
                })
                .catch(error => console.log(error))
        })
    })
}

export const GetTokenPrice = (event) => {
    return new Promise((resolve, reject) => {
        console.log(event)
        let bodyData = {
            "event": event
        }

        isSignedIn().then(authToken => {
            RNFetchBlob.config({
                trusty: true
            }).fetch('POST', 'https://' + ip + ':' + port + '/tokenprice', {
                    'Content-Type': 'application/json',
                    'x-access-token': authToken
                }, JSON.stringify(bodyData))
                .then(response => {
                    if(response.respInfo.status == 200){
                        resolve(JSON.parse(response.data))
                    } else {
                        console.log(JSON.stringify(response))
                        reject(response.data)
                    }
                })
                .catch(error => console.log(error))
        })
    })
}

export const GetEvents = () => {
    return new Promise((resolve, reject) => {

        isSignedIn().then(authToken => {
            RNFetchBlob.config({
                trusty: true
            }).fetch('POST', 'https://' + ip + ':' + port + '/events', {
                    'Content-Type': 'application/json',
                    'x-access-token': authToken
                })
                .then(response => {
                    if(response.respInfo.status == 200){
                        resolve(JSON.parse(response.data))
                    } else {
                        console.log(JSON.stringify(response))
                        reject(response.data)
                    }
                })
                .catch(error => console.log(error))
        })
    })
}
