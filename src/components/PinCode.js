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
                         obfuscation={true}
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

// All you need is love :)


//Put this in the state
//pin: '',
//gettingPin: false,

// Put this in the view, in the most outer container -> MAKE SURE TO REMOVE PADDING
//{this.state.gettingPin && <PinCode callback={(code) => {
//                    this.setState({gettingPin: false})
//                    this.setState({pin: code})
//                }}/>}