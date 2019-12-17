import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'
import { Colors } from '../components/GlobalVariables'


export default class AuthLoading extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Auth')}
                >
                    <Text style={styles.button_text}>To Authentication Stack</Text>

                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('App')}
                >
                    <Text style={styles.button_text}>To EventWallet</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 100 + '%',
        height: 100 + '%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.eventColor,
    },
    button: {
        width: 80 + '%',
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.lightTextColor,
        alignItems: 'center',
        marginBottom: 20,
    },
    button_text: {
        color: Colors.lightTextColor
    }
});
