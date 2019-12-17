import React, { Component } from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native'
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Fonts } from './GlobalVariables'

class RegularButton extends Component {
    render(){
        return (
            <TouchableOpacity 
                style={[styles.button, {backgroundColor: this.props.backgroundColor}]}
                onPress={() => { this.props.callback ? this.props.callback() : console.log('no callback') }}
            >
                <Text style={styles.button_text}>{ this.props.text }</Text>
                {this.props.icon && <Icon name={this.props.icon} size={35} color='white' />}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        height: 70,
		width: 40 + '%',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		borderRadius: 20,
		shadowColor: "#000",
        shadowOffset: { width: 0, height: 5, },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 7,

    },
    button_text: {
        fontSize: 20,
        textAlign: 'center',
        padding: 4,
        color: 'white',
        fontFamily: Fonts.text
    }
})

export default withNavigation(RegularButton)