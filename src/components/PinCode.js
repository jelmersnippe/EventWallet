import React, { Component } from 'react'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import { Fonts, Colors } from './GlobalVariables'

export default class PinCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pin: '',
        }
    }

    render() {
        const { pin } = this.state
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.text ? this.props.text : 'Confirm with your pin'}</Text>
                <SmoothPinCodeInput password mask='*'
                    cellStyle={{backgroundColor: 'white'}}
                    value={pin}
                    codeLength={5}
                    onTextChange={pin => this.setState({ pin })}
                    onFulfill={(pin) => this.props.callback(pin)}
                    autoFocus={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 100+'%',
        height: 100+'%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000070',
        position: 'absolute',
        zIndex: 999999999999999999999999999999999999
    },
    title: {
        fontFamily: Fonts.header,
        color: Colors.lightTextColor,
        fontSize: 24,
        marginBottom: 10,
    }
})