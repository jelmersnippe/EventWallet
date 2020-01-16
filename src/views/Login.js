import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native'

import { SignIn } from "../services/AuthAPI"

import {
    HeaderText,
    WideButton,
    AuthInput
} from '../components'
import { Colors, Fonts, appName } from '../components/GlobalVariables'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{appName}</Text>

                <HeaderText text='Login' />

                <View style={styles.input_fields}>
                    <AuthInput
                        text='Email'
                        placeholder='Email'
                        keyboardType='email-address'
                        onChangeText={input => this.setState({ email: input })}
                        maxLength={255}
                    />

                    <AuthInput
                        text='Password'
                        placeholder='Password'
                        password={true}
                        onChangeText={input => this.setState({ password: input })}
                        maxLength={100}
                    />

                    {this.state.error != '' &&
                        <Text style={styles.error_text}>
                            {this.state.error}
                        </Text>
                    }
                </View>

                <WideButton 
                    callback={() => { 
                        SignIn(this.state.email, this.state.password)
                            .then(() => { 
                                this.props.navigation.navigate('AuthLoading')
                            }) 
                            .catch(error => {
                                alert('Login failed:\n' + error)
                                this.setState({error: 'Unknown email and/or password' })
                            })
                    }} 
                    text='Login' 
                    textColor={Colors.lightTextColor} 
                    backgroundColor={Colors.eventColor} 
                    disabled={this.state.email == '' || this.state.password == ''} 
                />

                <View style={styles.secondary_button}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Register')}
                    >
                        <Text style={styles.secondary_button_text}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('ForgotPassword')}
                    >
                        <Text style={styles.secondary_button_text}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.backgroundColor,
        paddingHorizontal: 5 + '%',
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
        textAlign: 'center',
        fontFamily: Fonts.header
    },
    input_fields: {
        marginBottom: 10,
    },
    secondary_button: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        margin: 15,
        marginTop: 5,
    },
    secondary_button_text: {
        fontSize: 18,
        textDecorationLine: 'underline',
        marginTop: 15,
        fontFamily: Fonts.text
    },
    error_text: {
        color: 'red',
        textAlign: 'center',
        fontFamily: Fonts.text,
        marginBottom: 10,
    }
});
