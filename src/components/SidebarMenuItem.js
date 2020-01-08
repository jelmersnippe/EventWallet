import React, { Component} from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native'

import { Fonts, Colors } from './GlobalVariables'

export default class SidebarMenuItem extends Component {
	render() {
		return (
            <TouchableOpacity
                style={styles.menu_item}
                onPress={() => { this.props.callback ? this.props.callback() : console.log('no callback') }}
            >
                {this.props.icon}
                <Text style={[styles.text, {color: this.props.textColor}]}>{this.props.text}</Text>
            </TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
    menu_item: {
        alignItems: 'center',
        width: 100+'%',
        backgroundColor: Colors.darkEventColor,
        padding: 10,
        flexDirection: 'row',
    },
    text: {
        marginLeft: 5,
        fontSize: 16,
        flex: 8,
        fontFamily: Fonts.text
    }
})









