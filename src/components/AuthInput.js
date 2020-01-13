import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
} from 'react-native'

import { Fonts } from './GlobalVariables'

export default class AuthInput extends Component {
    render() {
        return (
            <View style={styles.input}>
                <Text style={styles.title}>{this.props.text}</Text>
                <TextInput
                    placeholder={this.props.placeholder}
                    autoCapitalize='none'
                    keyboardType={this.props.keyboardType}
                    secureTextEntry={this.props.password}
                    style={styles.input_text}
                    onChangeText={this.props.onChangeText}
                />

                {this.props.singleError != '' && this.props.singleError != undefined ?
                    <Text style={styles.error_text}>
                        {this.props.singleError}
                    </Text>
                    :
                    this.props.errorList != [] && this.props.errorList != undefined &&
                    <View>
                        {this.props.errorList.map(item => {
                            return (
                                <Text style={styles.error_text} key={this.props.errorList.indexOf(item)}>{item}</Text>
                            )
                        })}
                    </View>
                }
 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        marginVertical: 10,
        width: 90 + '%',
        alignSelf: 'center',
    },
    title: {
        fontSize: 20,
        fontFamily: Fonts.text,
    },
    input_text: {
        width: 100+'%',
        paddingHorizontal: 10,
        paddingBottom: 5,
        paddingTop: 0,
        borderBottomWidth: 1,
        fontSize: 20,
        fontFamily: Fonts.text,
    },
    error_text: {
        color: 'red',
        textAlign: 'center',
        fontFamily: Fonts.text,
    },
})