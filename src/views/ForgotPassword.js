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

                <TextInput 
                    style={styles.input_text} 
                    placeholder="Email address"
                    onChangeText={email => this.setState({email: email})}
                />

                
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
    input_text: {
		borderBottomWidth: 1,
		fontSize: 20,
		borderBottomColor: 'black',
		marginVertical: 15,
		padding: 10,
		width: '90%',
		fontFamily: Fonts.text,
		alignSelf: 'center'
    },
});
