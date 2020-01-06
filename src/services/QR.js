import RNFetchBlob from 'rn-fetch-blob'

const ip = '145.24.222.83'
const port = '3305'

export const GenerateQR = (code) => {
    return new Promise((resolve, reject) => {
    
        let codeData = {
            "code": code
        }

        console.log(codeData)

        RNFetchBlob.config({
            trusty: true
        }).fetch('POST', 'https://' + ip + ':' + port + '/generate-qr', {
                'Content-Type': 'application/json'
            }, JSON.stringify(codeData))
            .then(response => {
                console.log(JSON.stringify(response, null, 4))

                
                // if(response.respInfo.status == 200){
                //     resolve(true)
                // } else {
                //     resolve(response.data)
                // }
                resolve(true)
                
            })
            .catch(error => reject(error))

    })
}