import React, { Component } from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'
import { withNavigation } from 'react-navigation'

import Icon from 'react-native-vector-icons/FontAwesome5'
import { Fonts, buttonShadow } from '../components/GlobalVariables';
class WideButton extends Component {
    render(){
        return (
            <TouchableOpacity 
            style={[styles.button, 
                !this.props.hideShadow && !this.props.disabled && buttonShadow, 
                {
                    backgroundColor: this.props.disabled ? this.props.backgroundColor + '70' : this.props.backgroundColor, 
                    borderColor: this.props.disabled ? this.props.borderColor + '70' : this.props.borderColor,
                }]}
                onPress={() => { this.props.callback ? this.props.callback() : console.log('no callback') }}
                disabled={this.props.disabled}
            >
                <Text 
                    style={[styles.button_text, 
                    {color: this.props.disabled ? this.props.textColor + '70' : this.props.textColor }]}
                >
                    {this.props.text}
                </Text>
                {this.props.icon && <Icon name={this.props.icon} size={35} color={ this.props.disabled ? this.props.text + '70' : this.props.textColor } />}
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
        padding: 10,
        fontFamily: Fonts.text
    },
})

export default withNavigation(WideButton)