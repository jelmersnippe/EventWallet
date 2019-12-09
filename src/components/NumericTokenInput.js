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
            <View style={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <Text style={{fontSize: 20, marginRight: 10, marginBottom: 5}}>Select the amount of tokens:</Text>
                <NumericInput
                    value={this.state.value}
                    onChange={value => this.setState({ value })}
                    totalWidth={150}
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