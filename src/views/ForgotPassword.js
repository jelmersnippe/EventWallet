import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
	TextInput,
} from 'react-native';

export default class ForgotPassword extends Component {
    passwordResetAction () {

        // Make call to validate password reset attempt
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header1}>FestiFaggot</Text>
                <Text style={styles.header2}>Forgot password?</Text>

                <Text style={styles.text}>Please enter your email address to recieve an email with a reset link.</Text>

                <TextInput style={styles.textinput} placeholder="Email address"/>

                <TouchableOpacity
                    onPress={() => {
                        this.passwordResetAction();
                    }}
                    style={styles.button}
                >
                    <Text style={styles.bttntext}>Submit</Text>
                </TouchableOpacity>
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
    header2: {
        marginVertical: 10,
        textAlign: 'right',
        paddingRight: 5,
        textTransform: 'uppercase',
        fontSize: 21,
        borderBottomWidth: 1,
        paddingBottom: 5,
    },
    text: {
        fontSize: 15,
        color: 'black',
        marginTop: 5,
        marginBottom: 5,
        width: '90%',
        margin: 15
    },
    textinput: {
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
