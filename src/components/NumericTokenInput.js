import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import InputSpinner from "react-native-input-spinner";
import { Colors, Fonts } from './GlobalVariables'

export default class NumericTokenInput extends Component {
	constructor() {
		super();
		this.state = {
            value: 0
        }
	}

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Select the amount of tokens:</Text>
                <InputSpinner
                    value={this.state.value}
                    min={0}
                    step={1}
                    height={50}
                    colorLeft={this.state.value == 0 ? Colors.eventColor+'70' : Colors.eventColor}
                    colorRight={Colors.eventColor}
                    colorPress={Colors.darkEventColor}
                    rounded={false}
                    buttonFontSize={30}
                    fontSize={20}
                    showBorder={true}
                    onChange={ (value) => { 
                        this.setState({ value }), 
                        this.props.callback( Number(value)) 
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 100+'%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 20,
    },
    text: {
        width: 35+'%',
        fontSize: 20,
        fontFamily: Fonts.text,
        color: Colors.darkTextColor,
    },
})