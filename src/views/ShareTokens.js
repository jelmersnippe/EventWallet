import React, { Component } from 'react'
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	Picker,
} from 'react-native'

import NumericTokenInput from '../components/NumericTokenInput'
import HeaderText from '../components/HeaderText'

export default class ShareTokens extends Component {
	constructor() {
		super();
		this.state = { }
	}

	componentDidMount() {
		this.setState({friend: this.props.navigation.getParam('friend')})
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
						style={{ width: '100%'}}
						onValueChange={(itemValue, itemIndex) =>
							this.setState({ value: itemValue })
						}>
						<Picker.Item label="Wallet1" value="wallet1" />
						<Picker.Item label="Wallet2" value="wallet2" />
						<Picker.Item label="Wallet3" value="wallet3" />
					</Picker>
				</View>

				<HeaderText text='Balance' />
  			    <Text style = { styles.tokenammount_text }>You have {this.props.navigation.getParam('amount')}X tokens in total</Text>

        	<NumericTokenInput />

		    <View style={{ flexDirection: 'row' }}>
				<TouchableOpacity style={styles.button}
                    onPress={() => { this.props.navigation.goBack() }}
				>
					<Text style={styles.buttontext}>Cancel</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button2}>
					<Text style={styles.buttontext2}>Share</Text>
				</TouchableOpacity>
			</View>
		</View>

		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 3 +'%',
		backgroundColor: '#F8F9FB',
	},
	receiver: {
		fontSize: 25,
		marginLeft: 5,
		fontWeight: 'bold'
	},
	description: {
	    fontSize: 20,
	    marginBottom: 5,
	    marginLeft: 5,
	},
	header2: {
		fontSize: 23,
		color: 'black',
	},
	textinput: {
		fontSize: 20,
		height: 45,
		marginBottom: 15,
		color: 'black',
		backgroundColor: 'gray'
	},
	tokenammount_text: {
	    fontSize: 20,
	    width: '100%',
	    textAlign: 'left',
	    marginBottom: 15,
	    marginLeft: 5,
	},
   button: {
       flex: 1,
       height: 70,
       width: 40+'%',
       justifyContent: 'center',
       alignItems: 'center',
       marginHorizontal: 15,
       backgroundColor: 'lightgray',
       borderRadius: 20,
       marginVertical: 30,
   },
   buttontext: {
       fontSize: 20,
       textAlign: 'center',
       padding: 4,
       color: 'white'
   },
   button2: {
       flex: 1,
       height: 70,
       width: 40+'%',
       justifyContent: 'center',
       alignItems: 'center',
       marginHorizontal: 15,
       backgroundColor: '#0070C0',
       borderRadius: 20,
       marginVertical: 30,
   },
   buttontext2: {
       fontSize: 20,
       textAlign: 'center',
       padding: 4,
       color: 'white'
   },
   dropdown_container: {
	   borderWidth: 1,
	   borderRadius: 10,
	   marginBottom: 5,
	   marginTop: 5,
   }
});
