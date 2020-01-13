import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

import { Colors } from '../components/GlobalVariables'

export default class Contact extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Contact</Text>    
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