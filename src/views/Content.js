import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

import { appName, Colors } from '../components/GlobalVariables'

export default class Content extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>{appName}</Text>    
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.eventColor
    },
    text: {
        fontSize: 30,
        color: Colors.lightTextColor,
    }
})