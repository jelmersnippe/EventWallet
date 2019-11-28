import React, { Component } from 'react'
import {
    Platform,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
	TextInput,
	CheckBox,
} from 'react-native';

export default class Register extends Component {
    constructor() {
        super()
        this.state={
            name:'',
            nameValidate: true,
            password:'',
            passwordValidate: true,
            email:'',
            emailValidate: true,
        }

    }

    buttonClicked = () => alert

    validate(text, type)
    {
        const alph = /^[a-zA-Z]+$/
        const num = /^[a-zA-Z0-9]+$/
        const beta = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(type=='username')
            {
                if(alph.test(text))
                {
                this.setState({nameValidate: true,})
                }
                else
                    {
                    this.setState({nameValidate: false,})
                    alert("Username is not correct")
                    }
            }
                 else if(type=='password')
                     {
                         if(num.test(text))
                         {
                         this.setState({passwordValidate: true,})
                         }
                         else
                             {
                             this.setState({passwordValidate: false,})
                             alert("Password is not correct")
                             }
                     }
                              else if(type=='email')
                                  {
                                      if(beta.test(text))
                                      {
                                      this.setState({emailValidate: true,})
                                      }
                                      else
                                          {
                                          this.setState({emailValidate: false,})
                                          alert("Email is not correct")
                                          }
                                  }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Registration</Text>

                <TextInput style={[styles.textinput,
                !this.state.nameValidate ? styles.error:null]}
                placeholder="Username"
                onChangeText={(text)=>this.validate(text, 'username')}
                underlineColorAndroid={'transparent'}/>

                <TextInput style={[styles.textinput,
                !this.state.passwordValidate ? styles.error:null]}
                placeholder="Password"
                onChangeText={(text)=>this.validate(text, 'password')}
                //secureTextEntry={true}
                underlineColorAndroid={'transparent'}/>

                <TextInput style={[styles.textinput,
                !this.state.emailValidate ? styles.error:null]}
                placeholder="Email address"
                onChangeText={(text)=>this.validate(text, 'email')}
                underlineColorAndroid={'transparent'}/>

                <TouchableOpacity
                    style={styles.button}
                    //onpress
                >
                    <Text style={styles.bttntext}>Register</Text>
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
    },
   error: {
    borderWidth: 3,
    borderColor: 'red',
   }

});
