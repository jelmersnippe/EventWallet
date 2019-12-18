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
import { Colors, Fonts } from '../components/GlobalVariables';

export default class ShareTokens extends Component {
	constructor() {
		super();
		this.state = {
			selectedAmount: 0,
		}
	}

	componentDidMount() {
		this.setState({ friend: this.props.navigation.getParam('friend') })
	}

    updateSelectedAmount = (value) => {
        this.setState({ selectedAmount: value })
    }

	render() {
		return (
			<View style={styles.container}>
				<HeaderText text='Receiver' textColor={Colors.darkTextColor} barColor={Colors.darkTextColor} />
				<Text style={styles.receiver}>{this.state.friend ? this.state.friend.name : 'loading'}</Text>

				<HeaderText text='Wallet' textColor={Colors.darkTextColor} barColor={Colors.darkTextColor} />
				<Text style={styles.description}>Select the wallet of the event you want to share tokens for:</Text>
				<View style={styles.dropdown_container}>
					<Picker
						selectedValue={this.state.value}
						onValueChange={(itemValue, itemIndex) =>
							this.setState({ value: itemValue })
						}>
						<Picker.Item label="Wallet1" value="wallet1" />
						<Picker.Item label="Wallet2" value="wallet2" />
						<Picker.Item label="Wallet3" value="wallet3" />
					</Picker>
				</View>

				<HeaderText text='Balance' textColor={Colors.darkTextColor} barColor={Colors.darkTextColor} />
  			    <Text style = { styles.description}>You have {this.props.navigation.getParam('amount')}X tokens in total</Text>

				<NumericTokenInput callback={this.updateSelectedAmount} />

				<View style={styles.button_container}>
					<RegularButton 
						callback={() => {this.props.navigation.goBack()}} 
						text={'Cancel'} 
						textColor={Colors.darkTextColor}
						backgroundColor={Colors.cancelButtonColor}
						borderColor={Colors.cancelButtonBorderColor} 
					/>
					<RegularButton 
						text={'Share'} 
						textColor={Colors.darkTextColor}
						backgroundColor={Colors.ctaButtonColor} 
						borderColor={Colors.ctaButtonBorderColor}	
					/>
				</View>
			</View>

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
	receiver: {
		fontSize: 25,
		marginLeft: 5,
		fontFamily: Fonts.header,
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
	},
});
