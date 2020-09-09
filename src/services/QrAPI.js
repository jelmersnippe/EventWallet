import { APIRequest } from './APIRequest'

const ip = '145.24.222.83'
const port = '3305'

export const GenerateQR = (code) => {

    return new Promise((resolve, reject) => {
        reject('No event or pin specified')
    })

    // let bodyData = {
    //     "code": code
    // }

    // return APIRequest('POST', ip + ':' + port + '/generate-qr', false, bodyData)
}