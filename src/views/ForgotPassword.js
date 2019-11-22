import React, { Component } from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'


export default class Register extends Component {
    passwordResetAction () {
        // Make call to validate register attempt
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                    onPress={() => {
                        this.passwordResetAction();
                    }}
                >
                    <Text>Forgot password page</Text>
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