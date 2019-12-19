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
                    <Text style={styles.title}>{this.props.item.title}</Text>
                    <View style={styles.datetime_container}>
                        <Text style={styles.date_time}>{this.props.item.date}</Text>
                        <Text style={styles.date_time}>{this.props.item.time}</Text>
                    </View>
                </View>

                <Text  style={styles.announcement}>{this.props.item.announcement}</Text>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 100+'%',
        marginTop: 10,
        borderBottomWidth: 1,
    },
    header: {
        width: 100+'%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        backgroundColor: Colors.eventColor,
        borderRadius: 10,
    },
    title: {
        width: 70+'%', 
        paddingLeft: 10,
        fontFamily: Fonts.text,
        fontSize: 15,
        fontFamily: Fonts.topheader,
        color: Colors.lightTextColor,
    },
    datetime_container: {
        width: 30+'%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        fontFamily: Fonts.text
    },
    date_time: {
        fontFamily: Fonts.text,
        fontSize: 15,
        color: Colors.lightTextColor,
    },
    announcement: {
        padding: 5,
        fontFamily: Fonts.text,
        fontSize: 15,
        color: Colors.darkTextColor
    }
})