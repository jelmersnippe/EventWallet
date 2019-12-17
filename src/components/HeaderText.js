import React, { Component } from 'react'
import { 
    Text,
    StyleSheet 
} from 'react-native'

import { Fonts } from '../components/GlobalVariables'

export default class HeaderText extends Component {
    render() {
        return(
            <Text style={[styles.header, {color: this.props.textColor, borderColor: this.props.barColor}]}>{this.props.text}</Text>
        );
    }
}

const styles = StyleSheet.create({
	header: {
        marginTop: 10,
        paddingRight: 5,
        textAlign: 'right',
        fontSize: 20,
        borderBottomWidth: 1,
        fontFamily: Fonts.header
	},
})