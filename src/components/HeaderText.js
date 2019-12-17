import React, { Component } from 'react'
import { 
    Text,
    StyleSheet 
} from 'react-native'

import { Fonts } from '../components/GlobalVariables'

export default class HeaderText extends Component {
    render() {
        return(
            <Text style={styles.header}>{this.props.text}</Text>
        );
    }
}

const styles = StyleSheet.create({
	header: {
        marginTop: 10,
        textAlign: 'right',
        paddingRight: 5,
        fontSize: 20,
        borderBottomWidth: 1,

        fontFamily: Fonts.header
	},
})