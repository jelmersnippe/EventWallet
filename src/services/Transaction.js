import RNFetchBlob from 'rn-fetch-blob'
import { isSignedIn } from './Auth'

const ip = '145.24.222.83'
const transactionPort = '3306'
const eventPort = '3307'

export const CreateWallet = (event) => {
    return new Promise((resolve, reject) => {

        let eventData = {
            "event": event
        }

        isSignedIn().then(authToken => {
            RNFetchBlob.config({
                trusty: true
            }).fetch('POST', 'https://' + ip + ':' + transactionPort + '/wallet/create', {
                    'Content-Type': 'application/json',
                    'x-access-token': authToken
                }, JSON.stringify(eventData))
                .then(response => {
                    console.log(JSON.stringify(response, null, 4))
                    if(response.respInfo.status == 200){
                        resolve(JSON.parse(response.data))
                    } else {
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
                    console.log(JSON.stringify(response, null, 4))
                    if(response.respInfo.status == 200){
                        resolve(JSON.parse(response.data))
                    } else {
                        resolve(false)
                    }
                    
                })
                .catch(error => console.log(error))
        })
    }) 
}
