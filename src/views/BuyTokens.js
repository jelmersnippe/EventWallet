import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Picker,
} from 'react-native'

import {
    NumericTokenInput,
    RegularButton
} from '../components'
import { ScrollView } from 'react-native-gesture-handler';

export default class BuyTokens extends Component {
    constructor() {
        super();
        this.state = {
            PickerValue: ''
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.datetime}>ZATERDAG 14 DEC 14:00 - 01:00</Text>
                <Text style={styles.name}>Shockerz - The Raw Gathering</Text>
                <Text style={styles.location}>Autotron, Rosmalen</Text>

                <Text style={styles.header}>Payment</Text>

                <NumericTokenInput />

                <Text style={styles.description}>Select the payment method</Text>
                <View style={styles.dropdown_container}>
                    <Picker
                        style={{ height: 50, width: '100%' }}
                        itemStyle={{ fontSize: 17, backgroundColor: 'black' }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ language: itemValue })
                        }>
                        <Picker.Item label="IDEAL" value="IDEAL" />
                        <Picker.Item label="Paypal" value="Paypal" />
                        <Picker.Item label="Visa" value="Visa" />
                    </Picker>
                </View>


                <View style={styles.button_container}>
                    <RegularButton callback={() => {this.props.navigation.goBack()}} text={'Cancel'} backgroundColor='lightgray' />
					<RegularButton text={'Checkout'} backgroundColor='#0070C0' />
                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
		paddingHorizontal: 3 + '%',
		backgroundColor: '#F8F9FB',
	},
	header: {
		marginVertical: 10,
		textAlign: 'right',
		paddingRight: 5,
		textTransform: 'uppercase',
		fontSize: 21,
		borderBottomWidth: 1,
		paddingBottom: 5,
	},
	description: {
		fontSize: 20,
		marginBottom: 5,
		marginLeft: 5,
	},
    datetime: {
        marginTop: 20,
        color: '#80868B',
        textTransform: 'uppercase',
        fontSize: 12,
    },
    location: {
        color: '#505155',
        marginBottom: 15,
        width: '90%'
    },
    name: {
        fontSize: 29,
        fontWeight: 'bold',
        color: '#2D2D2D'
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
		marginTop: 20 
	},
	cancel_button: {
		height: 70,
		width: 40 + '%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'lightgray',
		borderRadius: 20,
	},
	cta_button: {
		height: 70,
		width: 40 + '%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#0070C0',
		borderRadius: 20,
	},
    button_text: {
        fontSize: 20,
        textAlign: 'center',
        padding: 4,
        color: 'white'
    },
});
