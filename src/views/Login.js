import React, { Component } from 'react'
import { 
    View, 
    Text,
    Button,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import LoginForm from '../components/LoginForm'

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LoginForm />
                
                <TouchableOpacity
                    style={{paddingVertical: 10}}
                    onPress={() => this.props.navigation.navigate('Register')}
                >
                    <Text>To register page</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{paddingVertical: 10, marginBottom: 20}}
                    onPress={() => this.props.navigation.navigate('ForgotPassword')}
                >
                    <Text>Forgot password?</Text>
                </TouchableOpacity>
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
});
