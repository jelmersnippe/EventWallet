import React, { Component } from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'


export default class Login extends Component {
    login () {
        this.props.navigation.navigate('profile')
    }

    render() {
        return (
            <TouchableOpacity 
                style={styles.container}
                onPress={() => {
                    this.login();
                }}
            >
                <Text>Login page</Text>
            </TouchableOpacity>
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
