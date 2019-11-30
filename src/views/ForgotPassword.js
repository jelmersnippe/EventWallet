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
                <Text style={styles.header}>Forgot password?</Text>

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
  },
  header: {
    fontSize: 25,
    color: 'black',
    marginTop: 30,
    paddingLeft: 50,
    paddingRight: 50,
  },
  text: {
    fontSize: 15,
    color: 'black',
    marginTop: 30,
    marginBottom: 30,
    paddingLeft: 50,
    paddingRight: 50,
  },
  textinput: {
    fontSize: 20,
    height: 45,
    marginBottom: 25,
    color: 'black',
    backgroundColor: 'gray',
    paddingLeft: 10,
    marginLeft: 50,
    marginRight: 50,
    },
   button: {
    alignItems: 'center',
    backgroundColor: 'black',
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10,
    paddingTop: 10,
    marginLeft: 100,
    marginRight: 100,
    },
   bttntext: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 3,
    marginBottom: 3,
    }

});
