import React, { Component } from 'react'
import {
    View, 
    Text,
    StyleSheet
} from 'react-native'


export default class AnnouncementItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>{this.props.item.title}</Text>
                    <View style={styles.datetime_container}>
                        <Text style={styles.date}>{this.props.item.date}</Text>
                        <Text style={styles.time}>{this.props.item.time}</Text>
                    </View>
                </View>

                <Text  style={styles.announcement}>{this.props.item.announcement}</Text>
                
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
        backgroundColor: '#F6CF3A'
    },
    title: {
        width: 70+'%', 
        paddingLeft: 10,
    },
    datetime_container: {
        width: 30+'%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    date: {

    },
    time: {

    },
    announcement: {
        padding: 5,
    }
})