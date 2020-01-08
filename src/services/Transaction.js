import RNFetchBlob from 'rn-fetch-blob'
import { isSignedIn } from './Auth'

const ip = '145.24.222.83'
const port = '3306'

export const CreateWallet = (event) => {
    return new Promise((resolve, reject) => {
        let bodyData = {
            "event": event
        }

        isSignedIn().then(authToken => {
            RNFetchBlob.config({
                trusty: true
            }).fetch('POST', 'https://' + ip + ':' + port + '/wallet/create', {
                    'Content-Type': 'application/json',
                    'x-access-token': authToken
                }, JSON.stringify(bodyData))
                .then(response => {
                    if(response.respInfo.status == 200){
                        resolve(JSON.parse(response.data))
                    } else {
                        console.log('CreateWallet failed:')
                        console.log(JSON.stringify(response, null, 4))
                        reject(response.data)
                    }
                })
                .catch(error => console.log(error))
        })
    })
}

export const AddFunds = (event, amount) => {
    return new Promise((resolve, reject) => {
        let bodyData = {
            "event": event,
            "amount": amount
        }

        isSignedIn().then(authToken => {
            RNFetchBlob.config({
                trusty: true
            }).fetch('POST', 'https://' + ip + ':' + port + '/transaction/add_funds', {
                    'Content-Type': 'application/json',
                    'x-access-token': authToken
                }, JSON.stringify(bodyData))
                .then(response => {
                    if(response.respInfo.status == 200){
                        resolve(JSON.parse(response.data))
                    } else {
                        console.log('AddFunds failed:')
                        console.log(JSON.stringify(response, null, 4))
                        reject(response.data)
                    }
                })
                .catch(error => console.log(error))
        })
    }) 
}

export const GetTransactionHistory = (event) => {
    return new Promise((resolve, reject) => {

        let bodyData = {
            "event": event
        }

        isSignedIn().then(authToken => {
            RNFetchBlob.config({
                trusty: true
            }).fetch('POST', 'https://' + ip + ':' + port + '/transaction/user/all', {
                    'Content-Type': 'application/json',
                    'x-access-token': authToken
                }, JSON.stringify(bodyData))
                .then(response => {
                    if(response.respInfo.status == 200){
                        resolve(JSON.parse(response.data))
                    } else {
                        console.log('GetTransactionHistory failed:')
                        console.log(JSON.stringify(response, null, 4))
                        reject(response.data)
                    }
                })
                .catch(error => console.log(error))
        })
    }) 
}

export const GetLatestTransaction = (event) => {
    return new Promise((resolve, reject) => {

        let bodyData = {
            "event": event
        }

        isSignedIn().then(authToken => {
            RNFetchBlob.config({
                trusty: true
            }).fetch('POST', 'https://' + ip + ':' + port + '/transaction/user/latest', {
                    'Content-Type': 'application/json',
                    'x-access-token': authToken
                }, JSON.stringify(bodyData))
                .then(response => {
                    if(response.respInfo.status == 200){
                        resolve(JSON.parse(response.data))
                    } else {
                        console.log('GetLatestTransaction failed:')
                        console.log(JSON.stringify(response, null, 4))
                        reject(response.data)
                    }
                })
                .catch(error => console.log(error))
        })
    }) 
}
