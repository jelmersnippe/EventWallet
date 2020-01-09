import { APIRequest } from './APIRequest'

const ip = '145.24.222.83'
const port = '3307'

export const GetWalletLink = (event) => {
    let bodyData = {
        "event": event
    }
    
    return APIRequest('POST', ip + ':' + port + '/wallet/user', true, bodyData)
}

export const GetWallets = () => {
    return APIRequest('POST', ip + ':' + port + '/wallets/user', true)
}

export const GetWristband = (event) => {
    let bodyData = {
        "event": event
    }
    
    return APIRequest('POST', ip + ':' + port + '/wristband', true, bodyData)
}

export const UpdateWristband = (event) => {
    let bodyData = {
        "event": event
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
