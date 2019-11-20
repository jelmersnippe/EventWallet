import React, { Component } from 'react'
import { 
    View, 
    Text,
    Button,
    StyleSheet,
    TouchableOpacity
} from 'react-native'


export default class Login extends Component {
    login () {
        // Make call to validate login attempt
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                    onPress={() => {
                        this.login();
                    }}
                >
                    <Text>Login page</Text>
                    <Button
                        title='To register page'
                        onPress={() => this.props.navigation.navigate('Register')}
                    />
                    <Button
                        title='Forgot password?'
                        onPress={() => this.props.navigation.navigate('ForgotPassword')}
                    />
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
