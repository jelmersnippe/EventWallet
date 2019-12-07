import React, { Component } from 'react'
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	Picker,
} from 'react-native'
import NumericInput from 'react-native-numeric-input'




export default class ShareTokens extends Component {
	constructor() {
		super();
		this.state = {
			PickerValue: ''
		}
	}

	render() {
		return (
			<View style={styles.container}>

    			<Text style={styles.header}>MY BALANCE</Text>
  			    <Text style = { styles.tokenammount_text }>You have {this.props.navigation.getParam('amount')} tokens</Text>

				<Text style={styles.header}>SHARE</Text>
                <Text style={styles.description}>Select the person you want to share tokens with:</Text>
        			<View>
        			    <Picker
        					selectedValue={this.state.language}
        						style={{ width: '100%' }}
        						onValueChange={(itemValue, itemIndex) =>
        							this.setState({ language: itemValue })
        						}>
        						<Picker.Item label="Berend101" value="wallet1" />
        						<Picker.Item label="Berend102" value="wallet2" />
        						<Picker.Item label="Berend103" value="wallet3" />
        				</Picker>
        			</View>

                <Text style={styles.description}>Select the specific wallet of a event:</Text>

				<View>
					<Picker
						selectedValue={this.state.language}
						style={{ width: '100%', marginTop: 5 }}
						onValueChange={(itemValue, itemIndex) =>
							this.setState({ language: itemValue })
						}>
						<Picker.Item label="Wallet1" value="wallet1" />
						<Picker.Item label="Wallet2" value="wallet2" />
						<Picker.Item label="Wallet3" value="wallet3" />
					</Picker>
				</View>

				<Text style={styles.description}>Select the ammount of tokens you want to share:</Text>

        <View style={styles.picker}>
            <NumericInput
                initValue={this.state.number}
                value={this.state.number}
                onChange={value => this.setState({number: value})}
                onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                totalWidth={300}
                totalHeight={50}
                iconSize={70}
                minValue={0}
                step={1}
                rounded
                borderColor='black'
                separatorWidth={0}
                valueType='real'
                textColor='black'
                iconStyle={{ color: 'black' }}
                rightButtonBackgroundColor='#F8F9FB'
                leftButtonBackgroundColor='#F8F9FB'
            />
        </View>

		    <View style={{ flexDirection: 'row' }}>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttontext}>Cancel</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button2}
					onPress={() => { this.props.navigation.goBack() }}
				>
					<Text style={styles.buttontext2}>Send</Text>
				</TouchableOpacity>
			</View>
		</View>

		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 3 +'%',
		backgroundColor: '#F8F9FB',
		marginTop: 20
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
	    fontSize: 17,
	    marginBottom: 10,
	},
	header2: {
		fontSize: 23,
		color: 'black',
		//marginBottom: 5,
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
	    borderColor: 'black',
	    borderWidth: 1,
	    padding: 10,
	    marginBottom: 5,
	    marginTop: 5,
	    borderRadius: 10,
	    backgroundColor: 'white'
	},
   button: {
       flex: 1,
       height: 70,
       width: 40+'%',
       justifyContent: 'center',
       alignItems: 'center',
       marginHorizontal: 15,
       backgroundColor: 'gray',
       borderRadius: 20,
       marginVertical: 30,
   },
   buttontext: {
       fontSize: 20,
       textAlign: 'center',
       padding: 4,
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
   },

});
