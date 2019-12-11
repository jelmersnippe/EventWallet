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
	HeaderText,
	RegularButton
 } from '../components'

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
				<HeaderText text='Receiver' />
				<Text style={styles.receiver}>{this.state.friend ? this.state.friend.name : 'loading'}</Text>

				<HeaderText text='Wallet' />
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

				<HeaderText text='Balance' />
  			    <Text style = { styles.description}>You have {this.props.navigation.getParam('amount')}X tokens in total</Text>

				<NumericTokenInput />

				<View style={styles.button_container}>
					<RegularButton callback={() => {this.props.navigation.goBack()}} text={'Cancel'} backgroundColor='lightgray' />
					<RegularButton text={'Share'} backgroundColor='#0070C0' />
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
});
