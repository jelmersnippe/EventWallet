import React, { Component } from 'react'
import { 
    View, 
	Text,
    TextInput,
    Button,
    StyleSheet,
} from 'react-native'
import { withNavigation } from 'react-navigation'

class LoginForm extends Component {
    login () {
        // Make call to validate login attempt, for now just redirect to app
        this.props.navigation.navigate('App')
    }

    render() {
        return (
            <View style={styles.container}>
				<Text>Login page</Text>
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
                <Button  // Switch to a TouchableOpacity item so styling can be modified.
                    title='Login'
                    onPress={() => { this.login() }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 100+'%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    input: {
        width: 80+'%',
        marginVertical: 5,
        backgroundColor: 'rgb(150, 150, 150)',
        borderColor: 'rgb(200, 200, 200)',
        borderWidth: StyleSheet.hairlineWidth
    }
});

export default withNavigation(LoginForm)
  