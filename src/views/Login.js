import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native'

import {
    HeaderText,
    WideButton
} from '../components'
import { Colors, Fonts } from '../components/GlobalVariables'

export default class Login extends Component {
    login() {
        // Make call to validate login attempt, for now just redirect to app
        this.props.navigation.navigate('App')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>FestiFaggot</Text>

                <HeaderText text='Login' />

                <TextInput
                    style={styles.input}
                    placeholder='Username'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                />

                <WideButton callback={() => { this.login() }} text='Login' backgroundColor={Colors.eventColor} />

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
        margin: 15,
        padding: 10,
        width: '90%',
        fontFamily: Fonts.text
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
    }
});
