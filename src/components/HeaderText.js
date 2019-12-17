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
        marginVertical: 10,
        textAlign: 'right',
        paddingRight: 5,
        textTransform: 'uppercase',
        fontSize: 21,
        borderBottomWidth: 1,
        //paddingBottom: 5,
        fontFamily: Fonts.header
	},
})