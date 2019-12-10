import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native'

import {
    HeaderText
} from '../components'

export default class Login extends Component {
    login() {
        // Make call to validate login attempt, for now just redirect to app
        this.props.navigation.navigate('App')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header1}>FestiFaggot</Text>

                <HeaderText text='Login' />

                <TextInput
                    style={styles.input}
                    placeholder='Username'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { this.login() }}
                >
                    <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginBottom: 1, }}>
                        Login
					</Text>
                </TouchableOpacity>

                <View style={styles.button2}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Register')}
                    >
                        <Text style={styles.text_button2}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('ForgotPassword')}
                    >
                        <Text style={styles.text_button2}>Forgot password?</Text>
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
        backgroundColor: '#F5FCFF',
        paddingHorizontal: 5 + '%',
    },
    input: {
        borderBottomWidth: 1,
        fontSize: 20,
        borderBottomColor: 'black',
        margin: 15,
        padding: 10,
        width: '90%',
    },
    header1: {
        fontSize: 30,
        marginBottom: 10,
        textAlign: 'center'
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
    button2: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        margin: 15,
        marginTop: 5
    },
    text_button2: {
        fontSize: 18,
        textDecorationLine: 'underline',
        marginTop: 15
    }
});
