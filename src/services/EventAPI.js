import { APIRequest } from './APIRequest'

const ip = '145.24.222.83'
const port = '3307'

export const GetWristband = (event, pin) => {
    let bodyData = {
        "event": event,
        "pin": pin
    }
    
    return APIRequest('POST', ip + ':' + port + '/wristband', true, bodyData)
}

export const UpdateWristband = (event, pin) => {
    let bodyData = {
        "event": event,
        "pin": pin
    }

    return APIRequest('POST', ip + ':' + port + '/wristband/update', true, bodyData)
}

export const GetTokenPrice = (event) => {
    let bodyData = {
        "event": event
    }

    return APIRequest('POST', ip + ':' + port + '/tokenprice', true, bodyData)
}

export const GetEvents = () => {
    return APIRequest('POST', ip + ':' + port + '/events', true)
}
