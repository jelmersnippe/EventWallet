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
import { Colors, Fonts, headerShadow } from '../components/GlobalVariables'

const tokenPrice = 2.5

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

    displayTokenPrice(tokenPrice){
        let priceString = tokenPrice.toString()
        if(tokenPrice % 1 == 0){
            priceString += ',-'
        }
        return priceString
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.header, headerShadow]}>
                    <Text style={styles.name}>{this.state.event.name}</Text>
                </View>
                
                <ScrollView style={styles.content}>

                    <HeaderText text='Buy tokens' textColor={Colors.darkTextColor} barColor={Colors.darkTextColor} />

                    <Text style={styles.description}>Price per token: €{this.displayTokenPrice(tokenPrice)}</Text>
                    <NumericTokenInput callback={this.updateSelectedAmount}/>

                    <Text style={styles.description}>Total price: €{this.displayTokenPrice(this.state.totalPrice)}</Text>

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
                            hideShadow={true}
                        />
                        <RegularButton 
                            text={'Checkout'} 
                            textColor={Colors.darkTextColor}
                            backgroundColor={Colors.ctaButtonColor}
                            borderColor={Colors.ctaButtonBorderColor}
                            disabled={this.state.selectedAmount == 0 && true}
                        />
                    </View>
                </ScrollView>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
    },
    header:{
        backgroundColor: Colors.eventColor,
    },
    name: {
        padding: 10,
        fontSize: 29,
        fontFamily: Fonts.topheader,
        color: Colors.lightTextColor,
    },
    content: {
        paddingHorizontal: 3+'%',
    },
    description: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
        fontFamily: Fonts.text,
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
