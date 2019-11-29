import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Keyboard
} from 'react-native';

export default class App extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      username:'',
      validatePassword: true,
      password:'',
      validatePassword: true,
      email:'',
      validateEmail: true
    }
  }

validateEmail = (email) => {
    console.log(email);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(reg.test(email) === false){
            this.setState({Error:"Kut email"})
            this.setState({email:email})
            return false;
            }
        else if(reg.test(email) === true){
            this.setState({email:email})
            this.setState({Error:"Goede email"});
            return true;
        }
    };

validatePassword = (password) => {
    console.log(password);
    let reg2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
        if(reg2.test(password) === false){
            this.setState({Error:"Kut password"})
            this.setState({password:password})
            return false;
            }
        else if(reg2.test(password) === true){
            this.setState({password:password})
            this.setState({Error:"Goed wachtwoord"});
            return true;
        }
    };

validateUsername = (username) => {

    console.log(username);
    let reg3 = /^[a-zA-Z0-9]{5,}$/
        if(reg3.test(username) === false){
            this.setState({Error:"Kut username"})
            this.setState({username:username})
            return false;
            }
        else if (reg3.test(username) === true){
            this.setState({username:username})
            this.setState({Error:"Goede username"})
            return true;
        }
    };

validate=() => {
    if (this.validateUsername === true);
    else if (this.validatePassword === true);
    else if (this.validateEmail === true);
   //this.setState({Error: 'thank you, your form is submitted successfully'});
}



  render() {
    return (
      <View style={styles.container}>

      <Text style={{color:'red', textAlign:'center'}}>
      {this.state.Error}
      </Text>

      <TextInput
      placeholder="Username"
      style={styles.textstyle}
      onChangeText={username => this.validateUsername(username)}
      value={this.state.username}
      />

      <TextInput
      placeholder="Password"
      style={styles.textstyle}
      //secureTextEntry={true}
      onChangeText={password => this.validatePassword(password)}
      value={this.state.password}
      />

      <TextInput
      placeholder="Email"
      style={styles.textstyle}
      onChangeText={email => this.validateEmail(email)}
      value={this.state.email}
      />


      <TouchableOpacity
      onPress={this.validate}
      style={{backgroundColor:'red',padding:10,width:150}}
      >
      <Text style={{color:'white',textAlign:'center',
      fontSize:20,fontWeight:'bold'}}>Submit</Text>
      </TouchableOpacity>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textstyle:{
    borderWidth:1,borderColor:'#ccc',
    margin:10, padding:10, width:'90%'
  }
});