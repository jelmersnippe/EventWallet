import { APIRequest } from './APIRequest'

const ip = '145.24.222.83'
const port = '3306'

export const CreateWallet = (event) => {
    let bodyData = {
        "event": event
    }
    
    return APIRequest('POST', ip, port, '/wallet/create', true, bodyData)
}

export const AddFunds = (event, amount) => {
    let bodyData = {
        "event": event,
            "amount": amount
    }
    
    return APIRequest('POST', ip, port, '/transaction/add_funds', true, bodyData)
}

export const GetTransactionHistory = (event) => {
    let bodyData = {
        "event": event
    }
    
    return APIRequest('POST', ip, port, '/transaction/user/all', true, bodyData)
}

export const GetLatestTransaction = (event) => {
    let bodyData = {
        "event": event
    }
    
    return APIRequest('POST', ip, port, '/transaction/user/latest', true, bodyData)
}
