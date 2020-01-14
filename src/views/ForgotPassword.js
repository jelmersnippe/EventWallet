import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import {
    HeaderText,
    WideButton,
    AuthInput
} from '../components'
import { Colors, Fonts, appName } from '../components/GlobalVariables'

export default class ForgotPassword extends Component {
    constructor(props) {
		super(props);
		this.state = {
			email: '',
		}
    }
    
    passwordResetAction () {

        // Make call to validate password reset attempt
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{appName}</Text>
                <HeaderText text='Forgot password?' />

                <Text style={styles.text}>Please enter your email address to recieve an email with a reset link.</Text>

                <View style={styles.input_fields}>
                    <AuthInput
                        text='Email'
                        placeholder='Email'
                        keyboardType='email-address'
                        onChangeText={input => this.setState({ email: input })}
                        maxLength={255}
                    />
                </View>

                <WideButton 
                    callback={() => {this.passwordResetAction()}} 
                    text='Submit' 
                    textColor={Colors.lightTextColor} 
                    backgroundColor={Colors.eventColor} 
                    disabled={this.state.email == ''}
                />
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
    input_fields: {
        marginBottom: 10,
    }
});
