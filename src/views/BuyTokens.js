import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Picker,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import {
    HeaderText,
} from '../components'

import {
    NumericTokenInput,
    RegularButton
} from '../components'
import { Colors, Fonts } from '../components/GlobalVariables'

const tokenPrice = 9

export default class BuyTokens extends Component {
    constructor() {
        super();
        this.state = {
            paymentMethod: '',
            selectedAmount: 0,
            totalPrice: 0,
            event: [],
        }
    }

    componentDidMount() {
        this.setState({ event: this.props.navigation.getParam('event') })
    }

    updateSelectedAmount = (value) => {
        this.setState({ selectedAmount: value })
        this.setState({ totalPrice: tokenPrice * value})
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.name}>{this.state.event.name}</Text>

                <HeaderText text='Buy tokens' textColor={Colors.darkTextColor} barColor={Colors.darkTextColor} />

                <Text style={styles.description}>Price per token: {tokenPrice}</Text>
                <NumericTokenInput callback={this.updateSelectedAmount}/>

                <Text style={styles.description}>Total price: {this.state.totalPrice}</Text>

                <Text style={styles.description}>Select the payment method</Text>
                <View style={styles.dropdown_container}>
                    <Picker
                        selectedValue={this.state.paymentMethod}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ paymentMethod: itemValue })}
                    >
                        <Picker.Item label="IDEAL" value="IDEAL" />
                        <Picker.Item label="Paypal" value="Paypal" />
                        <Picker.Item label="Visa" value="Visa" />
                    </Picker>
                </View>


                <View style={styles.button_container}>
                    <RegularButton 
                        callback={() => { this.props.navigation.goBack() }} 
                        text={'Cancel'} 
                        textColor={Colors.darkTextColor}
                        backgroundColor={Colors.cancelButtonColor} 
                        borderColor={Colors.cancelButtonBorderColor}
                    />
                    <RegularButton 
                        text={'Checkout'} 
                        textColor={Colors.darkTextColor}
                        backgroundColor={Colors.ctaButtonColor} 
                        borderColor={Colors.ctaButtonBorderColor} 
                    />
                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 3 + '%',
        backgroundColor: Colors.backgroundColor,
    },
    description: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
        fontFamily: Fonts.text,
        color: Colors.darkTextColor,
    },
    name: {
        marginTop: 20,
        fontSize: 29,
        fontFamily: Fonts.topheader,
        color: Colors.darkTextColor,
    },
    dropdown_container: {
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 5,
        marginTop: 5,
    },
    button_container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
        paddingBottom: 20,
    },
});
