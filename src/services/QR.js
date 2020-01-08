import RNFetchBlob from 'rn-fetch-blob'
const base64 = require('base-64')

const ip = '145.24.222.83'
const port = '3305'

export const GenerateQR = (code) => {
    return new Promise((resolve, reject) => {
    
        let codeData = {
            "code": code
        }

        RNFetchBlob.config({
            trusty: true
        }).fetch('POST', 'https://' + ip + ':' + port + '/generate-qr', {
                'Content-Type': 'application/json'
            }, JSON.stringify(codeData))
            .then(response => {
                if(response.respInfo.status == 200){
                    resolve(response.data)
                } else {
                    console.log('GenerateQR failed:')
                    console.log(JSON.stringify(response, null, 4))
                    resolve(false)
                }
                
            })
            .catch(error => reject(error))

    })
}