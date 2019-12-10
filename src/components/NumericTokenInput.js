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
            <View style={styles.container}>
                <Text style={styles.text}>Select the amount of tokens:</Text>
                <View style={styles.numeric_input_container}>
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 100+'%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        width: 40+'%',
        fontSize: 20,
    },
    numeric_input_container: {
        
    }
})