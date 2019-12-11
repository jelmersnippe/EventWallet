import React, { Component } from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'
import { withNavigation } from 'react-navigation'

import Icon from 'react-native-vector-icons/FontAwesome5'

class WideButton extends Component {
    render(){
        return (
            <TouchableOpacity 
                style={[styles.button, {backgroundColor: this.props.backgroundColor}]}
                onPress={() => { this.props.callback ? this.props.callback() : console.log('no callback') }}
            >
                <Text style={styles.button_text}>{ this.props.text }</Text>
                {this.props.icon && <Icon name={this.props.icon} size={35} color='black' />}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
		width: 100+'%',
		justifyContent: 'center',
        alignItems: 'center',
        
        borderRadius: 20,
        borderWidth: 1,
    },
    button_text: { 
        fontSize: 20, 
        fontWeight: 'bold',
        padding: 10,
    },
})

export default withNavigation(WideButton)