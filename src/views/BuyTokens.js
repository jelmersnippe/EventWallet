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

export default class BuyTokens extends Component {
    constructor() {
        super();
        this.state = {
            paymentMethod: '',
            totalPrice: 0,
            event: [],
        }
    }

    componentDidMount() {
        this.setState({ event: this.props.navigation.getParam('event') })
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.name}>{this.state.event.name}</Text>

                <HeaderText text='Buy tokens' />

                <Text style={styles.description}>Price per token: X</Text>
                <NumericTokenInput />

                <Text style={styles.description}>Total price: {this.state.totalPrice}</Text>

                <Text style={styles.description}>Select the payment method</Text>
                <View style={styles.dropdown_container}>
                    <Picker
                        style={{ height: 50, width: '100%' }}
                        itemStyle={{ fontSize: 17, backgroundColor: 'black' }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ paymentMethod: itemValue })
                        }>
                        <Picker.Item label="IDEAL" value="IDEAL" />
                        <Picker.Item label="Paypal" value="Paypal" />
                        <Picker.Item label="Visa" value="Visa" />
                    </Picker>
                </View>


                <View style={styles.button_container}>
                    <RegularButton callback={() => { this.props.navigation.goBack() }} text={'Cancel'} backgroundColor={Colors.cancelButtonColor} />
                    <RegularButton text={'Checkout'} backgroundColor={Colors.ctaButtonColor} borderColor={Colors.darkCtaButtonColor} />
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
        fontFamily: Fonts.text
    },
    name: {
        marginTop: 20,
        fontSize: 29,
        color: '#2D2D2D',
        fontFamily: Fonts.topheader
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
