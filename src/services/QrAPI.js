import { APIRequest } from './APIRequest'

const ip = '145.24.222.83'
const port = '3305'

export const GenerateQR = (code) => {
    let bodyData = {
        "code": code
    }

    return APIRequest('POST', ip + ':' + port + '/generate-qr', false, bodyData)
}