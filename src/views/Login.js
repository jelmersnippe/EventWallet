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
    WideButton
} from '../components'
import { Colors, Fonts, appName } from '../components/GlobalVariables'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: '',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{appName}</Text>

                <HeaderText text='Login' />

                <TextInput
                    style={styles.input}
                    autoCapitalize='none'
                    onChangeText={value => this.setState({ username: value })}
                    placeholder='Username / Email'
                />
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    autoCapitalize='none'
                    onChangeText={value => this.setState({ password: value })}
                    placeholder='Password'
                />

                {this.state.error != '' &&
                    <Text style={styles.error_text}>
                        {this.state.error}
                    </Text>
                }

                <WideButton 
                    callback={() => { 
                        SignIn(this.state.username, this.state.password)
                        .then(() => { 
                            this.props.navigation.navigate('SignedIn')
                        }) 
                        .catch(error => {
                            alert(error)
                            this.setState({error: 'Unknown username and/or password' })
                        })
                    }} 
                    text='Login' 
                    textColor={Colors.lightTextColor} 
                    backgroundColor={Colors.eventColor} 
                    disabled={this.state.username == '' || this.state.password == ''} 
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
    input: {
        borderBottomWidth: 1,
        fontSize: 20,
        borderBottomColor: 'black',
        marginVertical: 15,
        padding: 10,
        width: '90%',
        fontFamily: Fonts.text,
        alignSelf: 'center'
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
        textAlign: 'center',
        fontFamily: Fonts.header
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
