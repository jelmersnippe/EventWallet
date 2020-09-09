import { APIRequest } from './APIRequest'

const ip = '145.24.222.83'
const port = '3306'

//demo
const demoPin = '12345'

export const CreateWallet = (event) => {

    return new Promise((resolve, reject) => {
        if(event) {
            resolve()
        } else {
            reject('No event specified')
        }
    })

    // let bodyData = {
    //     "event": event
    // }
    
    // return APIRequest('POST', ip + ':' + port + '/wallet/create', true, bodyData)
}

export const GetWallets = () => {

        return new Promise((resolve) => {
            resolve([
                {
                    wallet: {
                        event_uid: "event1",
                    },
                    transaction: {
                        balance_after: 3,
                    },
                },
                {
                    wallet: {
                        event_uid: "event3",
                    },
                    transaction: {
                        balance_after: 7,
                    },
                },
                {
                    wallet: {
                        event_uid: "event4",
                    },
                    transaction: {
                        balance_after: 2,
                    },
                },
            ])
        })
    
    // return APIRequest('POST', ip + ':' + port + '/wallet/all', true)
}

export const AddFunds = (event, amount, pin) => {

    return new Promise((resolve, reject) => {
        if(event && amount && pin == demoPin) {
            resolve({
                date_time: '25 June 2020 - 22:06',
                amount: amount,
                counter_wallet_uid: 'counter3',
                balance_before: 6,
                balance_after: 6 + amount,
            })
        } else {
            reject('No event, amount, or pin does not match');
        }
    })

    // let bodyData = {
    //     "event": event,
    //     "amount": amount,
    //     "pin": pin
    // }
    
    // return APIRequest('POST', ip + ':' + port + '/transaction/add_funds', true, bodyData)
}

export const GetTransactionHistory = (event) => {

    return new Promise((resolve, reject) => {
        if(event) {
            resolve([
                {
                    date_time: '26 June 2020 - 21:03',
                    amount: -1,
                    counter_wallet_uid: 'counter3',
                    balance_before: 8,
                    balance_after: 7,
                },
                {
                    date_time: '26 June 2020 - 21:04',
                    amount: -1,
                    counter_wallet_uid: 'counter3',
                    balance_before: 7,
                    balance_after: 6,
                },
                {
                    date_time: '26 June 2020 - 21:05',
                    amount: -1,
                    counter_wallet_uid: 'counter3',
                    balance_before: 6,
                    balance_after: 5,
                },
            ])
        } else {
            reject('No event specified')
        }
    })

    // let bodyData = {
    //     "event": event
    // }
    
    // return APIRequest('POST', ip + ':' + port + '/transaction/user/all', true, bodyData)
}

export const GetLatestTransaction = (event) => {

    return new Promise((resolve, reject) => {
        if(event) {
            resolve([
                {
                    date_time: '26 June 2020 - 21:05',
                    amount: -1,
                    counter_wallet_uid: 'counter3',
                    balance_before: 6,
                    balance_after: 5,
                },
            ])
        } else {
            reject('No event specified')
        }
    })

    // let bodyData = {
    //     "event": event
    // }
    
    // return APIRequest('POST', ip + ':' + port + '/transaction/user/latest', true, bodyData)
}
