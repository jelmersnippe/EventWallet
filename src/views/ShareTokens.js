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
		this.state = {}
	}

	componentDidMount() {
		this.setState({ friend: this.props.navigation.getParam('friend') })
	}

	render() {
		return (
			<View style={styles.container}>

				<Text style={styles.header}>Receiver</Text>
				<Text style={styles.receiver}>{this.state.friend ? this.state.friend.name : 'loading'}</Text>

				<Text style={styles.header}>Wallet</Text>
				<Text style={styles.description}>Select the wallet of the event you want to share tokens for:</Text>
				<View style={styles.dropdown_container}>
					<Picker
						selectedValue={this.state.value}
						style={{ width: '100%' }}
						onValueChange={(itemValue, itemIndex) =>
							this.setState({ value: itemValue })
						}>
						<Picker.Item label="Wallet1" value="wallet1" />
						<Picker.Item label="Wallet2" value="wallet2" />
						<Picker.Item label="Wallet3" value="wallet3" />
					</Picker>
				</View>

				<Text style={styles.header}>Balance</Text>
				<Text style={styles.description}>You have {this.props.navigation.getParam('amount')}X tokens in total</Text>

				<NumericTokenInput />

				<View style={styles.button_container}>
					<TouchableOpacity style={styles.cancel_button}
						onPress={() => { this.props.navigation.goBack() }}
					>
						<Text style={styles.button_text}>Cancel</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.cta_button}>
						<Text style={styles.button_text}>Share</Text>
					</TouchableOpacity>
				</View>
			</View>

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
	receiver: {
		fontSize: 25,
		marginLeft: 5,
		fontWeight: 'bold'
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
