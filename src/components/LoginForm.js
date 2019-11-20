import React, { Component } from 'react'
import { 
    View, 
    TextInput,
    Button,
    StyleSheet,
} from 'react-native'

export default class LoginForm extends Component {
    login () {
        // Make call to validate login attempt
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.input}
                    placeholder='Username'
                    placeholderTextColor='rgba(255,255,255,0.8)'
                />
                <TextInput 
                    style={styles.input}
                    placeholder='Password'
                    placeholderTextColor='rgba(255,255,255,0.8)'
                />
                <Button 
                    title='Login'
                    onPress={() => { this.login() }}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 100+'%',
      height: 100+'%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    input: {
        width: 80+'%',
        backgroundColor: 'rgb(150, 150, 150)',
        borderColor: 'rgb(200, 200, 200)',
        borderWidth: StyleSheet.hairlineWidth
    }
});
  