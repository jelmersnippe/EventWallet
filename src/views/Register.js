import React, { Component } from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity, 
	TextInput,
} from 'react-native';

export default class Register extends Component {
    register () {
        // Make call to validate register attempt
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                    onPress={() => {
                        this.register();
                    }}
                >
                    <Text style={styles.header}>Registration</Text>

                    <TextInput style={styles.textinput} placeholder="Username"
                    underlineColorAndroid={'transparent'}/>

                    <TextInput style={styles.textinput} placeholder="Password"
                    secureTextEntry={true} underlineColorAndroid={'transparent'}/>

                    <TextInput style={styles.textinput} placeholder="Email address"
                    underlineColorAndroid={'transparent'}/>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.bttntext}>Register</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    backgroundColor: '#40e0d0'
  },
  header: {
    fontSize: 35,
    color: 'white',
    paddingBottom: 5,
    marginBottom: 40,
    borderBottomColor: 'white',
    borderBottomWidth: 3,
  },
  textinput: {
    alignSelf: 'stretch',
    fontSize: 20,
    height: 45,
    marginBottom: 25,
    color: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    },
   button: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#20b2aa',
    marginTop: 20,
    marginTop: 40,
    paddingLeft: 60,
    paddingRight: 60,
    },
   bttntext: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 3,
    marginBottom: 3,
    }

});
