import React, { Component } from 'react'
import CodePin from 'react-native-pin-code'
import {
    View,
    StyleSheet,
} from 'react-native'

export default class PinCode extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{backgroundColor: 'white'}}>
                    <CodePin
                         number={5}
                         checkPinCode={(code) => this.props.callback(code)}
                         success={() => console.log('hurray!')}
                         text="Confirm with your PIN"
                         error="You fail"
                         autoFocusFirst={true}
                         keyboardType="numeric"
                         //obfuscation={true}
                         containerStyle={{backgroundColor: 'white'}}
                    />
                </View>
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
        alignItems: 'center',
        backgroundColor: '#00000070',
        position: 'absolute',
        zIndex: 999999999999999999999999999999999999
    }
})