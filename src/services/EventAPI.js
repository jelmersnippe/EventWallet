import { APIRequest } from './APIRequest'
import AsyncStorage from '@react-native-community/async-storage'

const ip = '145.24.222.83'
const port = '3307'

const specificEventKey = 'SpecificEvent'

export const SetSpecificEvent = async (event) => {
    return await AsyncStorage.setItem(specificEventKey, event)
}

export const GetSpecificEvent = async () => {
    return await AsyncStorage.getItem(specificEventKey)
}

export const GetWristband = (event, pin) => {

    return new Promise((resolve, reject) => {
        if(event && pin){
            resolve({
                code: "ABCDEF12345",
                status: "active",
            })
        } else {
            reject('No event or pin specified')
        }
    })

    // let bodyData = {
    //     "event": event,
    //     "pin": pin
    // }
    
    // return APIRequest('POST', ip + ':' + port + '/wristband', true, bodyData)
}

export const UpdateWristband = (event, pin) => {

    return new Promise((resolve, reject) => {
        if(event && pin){
            resolve({
                code: "NOTHARDCODED",
                status: "pending",
            })
        } else {
            reject('No event or pin specified')
        }
    })

    // let bodyData = {
    //     "event": event,
    //     "pin": pin
    // }

    // return APIRequest('POST', ip + ':' + port + '/wristband/update', true, bodyData)
}

export const GetTokenPrice = (event) => {

    return new Promise((resolve, reject) => {
        if(event){
            resolve({price: 2.50})
        } else {
            reject('No event specified')
        }
    })

    // let bodyData = {
    //     "event": event
    // }

    // return APIRequest('POST', ip + ':' + port + '/tokenprice', true, bodyData)
}

export const GetEvent = (uid) => {

    return new Promise((resolve, reject) => {
        if(uid) {
            resolve( {
                id: "1",
                uid: "event1",
                begin_date: "June 25 2020",
                end_date: "June 27 2020",
                name: "Event 1",
                location: "Event location 1",
                description: "Event 1 description",
            })
        } else {
            reject()
        }
    })

    // let bodyData = {
    //     "uid": uid
    // }

    // return APIRequest('POST', ip + ':' + port + '/event/id', true, bodyData)
}

export const GetEvents = () => {

    return new Promise((resolve) => {
        resolve([
            {
                id: "1",
                uid: "event1",
                begin_date: "June 25 2020",
                end_date: "June 27 2020",
                name: "Event 1",
                location: "Event location 1",
                description: "Event 1 description",
            },
            {
                id: "2",
                uid: "event2",
                begin_date: "June 25 2020",
                end_date: "June 27 2020",
                name: "Event 2",
                location: "Event location 2",
                description: "Event 2 description",
            },
            {
                id: "3",
                uid: "event3",
                begin_date: "June 25 2020",
                end_date: "June 27 2020",
                name: "Event 3",
                location: "Event location 3",
                description: "Event 3 description",
            },
            {
                id: "4",
                uid: "event4",
                begin_date: "June 25 2020",
                end_date: "June 27 2020",
                name: "Event 4",
                location: "Event location 4",
                description: "Event 4 description",
            },
            {
                id: "5",
                uid: "event5",
                begin_date: "June 25 2020",
                end_date: "June 27 2020",
                name: "Event 5",
                location: "Event location 5",
                description: "Event 5 description",
            },
        ])
    })

    // return APIRequest('POST', ip + ':' + port + '/events', true)
}

export const GetAnnouncements = (event) => {

    return new Promise((resolve, reject) => {
        if(event) {
            resolve([
                {
                    id: 1,
                    title: 'Announcement 1',
                    datetime: '7 Sept 2020',
                    message: 'This a demo announcement',
                },
                {
                    id: 2,
                    title: 'Announcement 2',
                    datetime: '8 Sept 2020',
                    message: 'This a demo announcement',
                },
                {
                    id: 3,
                    title: 'Announcement 3',
                    datetime: '9 Sept 2020',
                    message: 'This a demo announcement',
                },
            ])
        } else {
            reject('No event specified')
        }
    })

    // let bodyData = {
    //     "event": event
    // }

    // return APIRequest('POST', ip + ':' + port + '/announcements', true, bodyData)
}
