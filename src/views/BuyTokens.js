import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Picker,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import {
    NumericTokenInput,
    RegularButton
} from '../components'
import { Colors } from '../components/GlobalVariables'

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
                <Text style={styles.name}>Shockerz - The Raw Gathering</Text>

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
                    <RegularButton callback={() => {this.props.navigation.goBack()}} text={'Cancel'} backgroundColor={Colors.cancelButtonColor} />
					<RegularButton text={'Checkout'} backgroundColor={Colors.ctaButtonColor} />
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
    name: {
        marginTop: 20,
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
});
