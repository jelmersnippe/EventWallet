import React, { Component } from 'react'
import {
    View, 
    Text,
    StyleSheet
} from 'react-native'

import { Colors, Fonts } from './GlobalVariables'

export default class AnnouncementItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <View style={styles.datetime_container}>
                        <Text style={styles.date}>{this.props.date}</Text>
                        <Text style={styles.time}>{this.props.time}</Text>
                    </View>
                </View>

                <Text  style={styles.announcement}>{this.props.announcement}</Text>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 100+'%',
        marginVertical: 5,
        borderWidth: 1,
    },
    header: {
        width: 100+'%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        backgroundColor: Colors.eventColor,

    },
    title: {
        width: 70+'%', 
        paddingLeft: 10,
        fontFamily: Fonts.text,
        fontSize: 15
    },
    datetime_container: {
        width: 30+'%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        fontFamily: Fonts.text
    },
    date: {
        fontFamily: Fonts.text,
        fontSize: 15
    },
    time: {
        fontFamily: Fonts.text,
        fontSize: 15
    },
    announcement: {
        padding: 5,
        fontFamily: Fonts.text,
        fontSize: 15,

    }
})