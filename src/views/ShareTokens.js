import React, { Component } from 'react'
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	Picker,
} from 'react-native'

import NumericTokenInput from '../components/NumericTokenInput'




export default class ShareTokens extends Component {
	constructor() {
		super();
		this.state = {
			PickerValue: ''
		}
	}

	render() {
		return (
			<View>

				<Text style={styles.header}>Receiver</Text>

				<View>
					<Picker
						selectedValue={this.state.language}
						style={{ height: 60, width: '80%', marginLeft: 30, marginRight: 30, alignItems: 'center' }}
						onValueChange={(itemValue, itemIndex) =>
							this.setState({ language: itemValue })
						}>
						<Picker.Item label="Wallet1" value="wallet1" />
						<Picker.Item label="Wallet2" value="wallet2" />
						<Picker.Item label="Wallet3" value="wallet3" />
					</Picker>
				</View>

				<Text style={styles.header}>Balance</Text>

				<NumericTokenInput />


				<View style={{ flexDirection: 'row', paddingLeft: 80, paddingRight: 30, paddingBottom: 10 }}>
					<TouchableOpacity>
						<Text style={styles.button}>Send</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => { this.props.navigation.goBack() }}
					>
						<Text style={styles.button}>Cancel</Text>
					</TouchableOpacity>
				</View>
			</View>

		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	header: {
		fontSize: 25,
		color: 'black',
		paddingBottom: 10,
		marginTop: 10,
		marginBottom: 10,
		//paddingLeft: 80,
		//paddingRight: 80,
		textAlign: 'center',
	},
	textinput: {
		fontSize: 20,
		height: 45,
		marginBottom: 15,
		color: 'black',
		backgroundColor: 'gray',
		paddingLeft: 10,
		marginLeft: 30,
		marginRight: 30,
	},
	button: {
		fontSize: 20,
		backgroundColor: 'lightgray',
		padding: 10,
		marginHorizontal: 10
	},
});
