import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

export default class Logout extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity>
                    <Text style={{textDecorationLine: 'underline'}}>Press to log out</Text>
                </TouchableOpacity>
            </View>
        );
    }
}