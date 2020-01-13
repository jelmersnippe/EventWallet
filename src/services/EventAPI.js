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

export const GetEvent = (uid) => {
    let bodyData = {
        "uid": uid
    }

    return APIRequest('POST', ip + ':' + port + '/event/id', true, bodyData)
}

export const GetEvents = () => {
    return APIRequest('POST', ip + ':' + port + '/events', true)
}

export const GetAnnouncements = (event) => {
    let bodyData = {
        "event": event
    }

    return APIRequest('POST', ip + ':' + port + '/announcements', true, bodyData)
}
