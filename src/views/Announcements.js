import React, { Component } from 'react'
import {
    StyleSheet
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import { 
    AnnouncementList, 
    HeaderText 
} from '../components'

const announcements = [
    {
        id: 1,
        title: 'Test 1',
        date: '28/11',
        time: '14:26',
        announcement: 'This is a test announcement to apply some styling to this element :)'
    },
    {
        id: 2,
        title: 'Test 2',
        date: '28/11',
        time: '14:26',
        announcement: 'This is a test announcement to apply some styling to this element :)'
    },
    {
        id: 3,
        title: 'Test 3',
        date: '28/11',
        time: '14:26',
        announcement: 'This is a test announcement to apply some styling to this element :)'
    },
    {
        id: 4,
        title: 'Test 4',
        date: '28/11',
        time: '14:26',
        announcement: 'This is a test announcement to apply some styling to this element :)'
    },
    {
        id: 5,
        title: 'Test 5',
        date: '28/11',
        time: '14:26',
        announcement: 'This is a test announcement to apply some styling to this element :)'
    },
    {
        id: 6,
        title: 'Test 6',
        date: '28/11',
        time: '14:26',
        announcement: 'This is a test announcement to apply some styling to this element :)'
    },
    {
        id: 7,
        title: 'Test 7',
        date: '28/11',
        time: '14:26',
        announcement: 'This is a test announcement to apply some styling to this element :)'
    },
    {
        id: 8,
        title: 'Test 8',
        date: '28/11',
        time: '14:26',
        announcement: 'This is a test announcement to apply some styling to this element :)'
    },
    {
        id: 9,
        title: 'Test 9',
        date: '28/11',
        time: '14:26',
        announcement: 'This is a test announcement to apply some styling to this element :)'
    },
    
]

export default class Announcements extends Component {
    render() {
        return(
            <ScrollView style={styles.container}>
                <HeaderText text='Announcements' />
                <AnnouncementList 
                    data={announcements}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FB',
        paddingHorizontal: 3+'%'
    },
    header: {
        marginVertical: 10,
        textAlign: 'right',
        paddingRight: 5,
        textTransform: 'uppercase',
        fontSize: 21,
        borderBottomWidth: 1,
        paddingBottom: 5,
	},
})