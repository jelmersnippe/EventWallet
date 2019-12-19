import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    AsyncStorage,
} from 'react-native'


import {
    HeaderText,
    WideButton
} from '../components'
import { Colors, Fonts } from '../components/GlobalVariables'

const ip = '145.24.222.83'
const port = '3304'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: '',
        }
    }

    login(username, password) {
        // Make call to validate login attempt, for now just redirect to app
        if (username == 'user' && password == 'pass') {
            this.storeAuthToken()
        } else {
            this.setState({ error: 'Unknown username and/or password' })
        }
        
        // fetch('https://145.24.222.83:3304/login', {
        //         method: 'POST',
        //         headers: {
        //             Accept: 'application/json',
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             username: {username},
        //         }),
        //     }).then(response => console.log(response));

    }

    storeAuthToken = async () => {
        try {
            await AsyncStorage.setItem('AuthToken', '1234').then(
                this.props.navigation.navigate('App')
            )
        } catch (error) {
            console.log('Problem storing token: ' + error)
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>FestiFaggot</Text>

                <HeaderText text='Login' />

                <TextInput
                    style={styles.input}
                    autoCapitalize='none'
                    onChangeText={value => this.setState({ username: value })}
                    placeholder='Username'
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

                <WideButton callback={() => { this.login(this.state.username, this.state.password) }} text='Login' textColor={Colors.lightTextColor} backgroundColor={Colors.eventColor} />

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
