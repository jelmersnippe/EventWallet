import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import NumericInput from 'react-native-numeric-input'

export default class NumericTokenInput extends Component {
	constructor() {
		super();
		this.state = {}
	}

    render() {
        return (
            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingBottom: 10, alignItems: 'center' }}>
                <NumericInput
                    value={this.state.value}
                    onChange={value => this.setState({ value })}
                   totalWidth={300}
                   totalHeight={50}
                   iconSize={70}
                   minValue={0}
                   step={1}
                   rounded
                   borderColor='black'
                   separatorWidth={0}
                   valueType='real'
                   textColor='black'
                   iconStyle={{ color: 'black' }}
                   rightButtonBackgroundColor='#F8F9FB'
                   leftButtonBackgroundColor='#F8F9FB'
                />
            </View>
        );
    }
}




const styles = StyleSheet.create({

    header2: {
        fontSize: 23,
        color: 'black',
        paddingBottom: 5,
        marginBottom: 5,
        paddingLeft: 30,
        paddingRight: 30,
        marginRight: 30,
    },
})