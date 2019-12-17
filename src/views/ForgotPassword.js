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
import { Colors, Fonts } from '../components/GlobalVariables'

export default class ForgotPassword extends Component {
    passwordResetAction () {

        // Make call to validate password reset attempt
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>FestiFaggot</Text>
                <HeaderText text='Forgot password?' />

                <Text style={styles.text}>Please enter your email address to recieve an email with a reset link.</Text>

                <TextInput style={styles.input_text} placeholder="Email address"/>

                
                <WideButton callback={() => {this.passwordResetAction()}} text='Submit' textColor={Colors.lightTextColor} backgroundColor={Colors.eventColor} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.backgroundColor,
        paddingHorizontal: 5+'%',
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
        textAlign: 'center',
        fontFamily: Fonts.header
    },
    text: {
        fontSize: 18,
        color: 'black',
        marginTop: 5,
        marginBottom: 5,
        width: '90%',
        margin: 15,
        fontFamily: Fonts.text
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
        borderBottomColor: 'black',
        fontFamily: Fonts.text
    },
});
