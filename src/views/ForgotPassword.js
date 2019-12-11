import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
	TextInput,
} from 'react-native';

import {
    HeaderText,
    WideButton
} from '../components'

export default class ForgotPassword extends Component {
    passwordResetAction () {

        // Make call to validate password reset attempt
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header1}>FestiFaggot</Text>
                <HeaderText text='Forgot password?' />

                <Text style={styles.text}>Please enter your email address to recieve an email with a reset link.</Text>

                <TextInput style={styles.input_text} placeholder="Email address"/>

                
                <WideButton callback={() => {this.passwordResetAction()}} text='Submit' backgroundColor='#F6CF3A' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
        paddingHorizontal: 5+'%',
    },
    header1: {
        fontSize: 30,
        marginBottom: 10,
        textAlign: 'center'
    },
    text: {
        fontSize: 15,
        color: 'black',
        marginTop: 5,
        marginBottom: 5,
        width: '90%',
        margin: 15
    },
    input_text: {
        fontSize: 20,
        height: 45,
        marginBottom: 25,
        color: 'black',
        padding: 10,
        width: '90%',
        margin: 15,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    button: {
        borderRadius: 15,
        backgroundColor: '#F6CF3A',
        padding: 10,
        width: 150,
        width: '90%',
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        color: 'black',
    },
    bttntext: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    }
});
