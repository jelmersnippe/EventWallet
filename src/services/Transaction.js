import RNFetchBlob from 'rn-fetch-blob'
import { isSignedIn } from './Auth'

const ip = '145.24.222.83'
const transactionPort = '3306'

export const CreateWallet = (event) => {
    return new Promise((resolve, reject) => {
        let eventData = {
            "event": event
        }
        console.log(JSON.stringify(eventData))
        isSignedIn().then(authToken => {
            RNFetchBlob.config({
                trusty: true
            }).fetch('POST', 'https://' + ip + ':' + transactionPort + '/wallet/create', {
                    'Content-Type': 'application/json',
                    'x-access-token': authToken
                }, JSON.stringify(eventData))
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

export const GetTransactionHistory = (event) => {
    return new Promise((resolve, reject) => {

        let eventData = {
            "event": event
        }

        isSignedIn().then(authToken => {
            RNFetchBlob.config({
                trusty: true
            }).fetch('POST', 'https://' + ip + ':' + transactionPort + '/transaction/user/all', {
                    'Content-Type': 'application/json',
                    'x-access-token': authToken
                }, JSON.stringify(eventData))
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

        let eventData = {
            "event": event
        }

        isSignedIn().then(authToken => {
            RNFetchBlob.config({
                trusty: true
            }).fetch('POST', 'https://' + ip + ':' + transactionPort + '/transaction/user/latest', {
                    'Content-Type': 'application/json',
                    'x-access-token': authToken
                }, JSON.stringify(eventData))
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
