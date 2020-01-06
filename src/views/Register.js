import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from 'react-native';

import {
	HeaderText,
	WideButton
} from '../components'
import { Colors, Fonts, appName } from '../components/GlobalVariables'

import { SignUp } from '../services/Auth'

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			usernameError: '',
			password: '',
			passwordError: [],
			email: '',
			emailError: '',
		}
	}

	addPasswordError = (error) => {
		this.setState(state => { 
			const passwordError = [...state.passwordError, error];
			
			return {
				passwordError,
			}
		})
	}

	validatePassword = (password) => {
		this.setState({ passwordError: [] })
		if(password == ''){
			this.addPasswordError("This field can't be empty")
			return false;
		}

		// 8 characters length or more
        // 1 digit or more
        // 1 symbol or more
        // 1 uppercase letter or more
        // 1 lowercase letter or more

		let length_error = 'Must be at least 8 characters'
		let digit_error = 'Must contain a digit'
		let uppercase_error = 'Must contain an uppercase character'
		let lowercase_error = 'Must contain a lowercase character'
		let symbol_error = 'Must contain a symbol: !@#$%^&* or a space'

		let digit_reg = /[\d]/ // digits
		let uppercase_reg = /[A-Z]/ // uppercase alphabet
		let lowercase_reg = /[a-z]/ // lowercase alphabet
		let symbol_reg = /[!@#$%^&*\s]/ // symbols: !@#%^&* and space

		let validPassword = true
		let errors = []

		if(password.length < 8){
			validPassword = false
			errors.push(length_error)
		}
		if(password.search(digit_reg) < 0){
			validPassword = false
			errors.push(digit_error)
		}
		if(password.search(uppercase_reg) < 0){
			validPassword = false
			errors.push(uppercase_error)
		}
		if(password.search(lowercase_reg) < 0){
			validPassword = false
			errors.push(lowercase_error)
		}
		if(password.search(symbol_reg) < 0){
			validPassword = false
			errors.push(symbol_error)
		}

		if(!validPassword){
			this.addPasswordError('Invalid password');
			errors.forEach(error => {
				this.addPasswordError(error)
			})
		}

		return validPassword;
	};

	validateUsername = (username) => {
		this.setState({ usernameError: '' })
		if (username == '') {
			this.setState({ usernameError: "This field can't be empty" })
			return false;
		}

		let reg = /^[a-zA-Z0-9]{5,}$/

		if (!reg.test(username)) {
			this.setState({ usernameError: "Invalid username\nMust be at least 6 characters\nOnly alphanumeric characters are allowed" })
			return false;
		}

		return true;
	};



	validateEmail = (email) => {
		this.setState({ emailError: '' })
		if (email == '') {
			this.setState({ emailError: "This field can't be empty" })
			return false;
		}

		let reg = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/

		if (!reg.test(email)) {
			this.setState({ emailError: "Invalid email.\nFollow the format 'johndoe@example.com'" })
			return false;
		}

		return true;
	};

	validate = () => {
		let validUsername = this.validateUsername(this.state.username)
		let validPassword = this.validatePassword(this.state.password)
		let validEmail = this.validateEmail(this.state.email)

		if(validUsername && validEmail && validPassword){
			SignUp(this.state.username, this.state.password, this.state.email)
			.then( response => {
				if(response == true){
					alert('Thank you, you registered successfully')
					this.props.navigation.navigate('Login')
				} else {
					alert(response)
				}
			})
		} 
		else {
			alert('Invalid input. Please correct the comments')
		}
	}

	render() {
		return (
			<View style={styles.container}>

			    <Text style={styles.title}>{appName}</Text>

                <HeaderText text='Register' />

				<TextInput
					placeholder="Username"
                    autoCapitalize='none'
					style={styles.input_text}
					onChangeText={username => this.setState({username: username})}
				/>

                {this.state.usernameError != '' &&
					<Text style={styles.error_text}>
						{this.state.usernameError}
					</Text>
				}

				<TextInput
					placeholder="Password"
                    autoCapitalize='none'
					style={styles.input_text}
					secureTextEntry={true}
					onChangeText={password => this.setState({password: password})}
				/>

				<View>
					{this.state.passwordError.map(item => {
						return(
							<Text style={styles.error_text} key={this.state.passwordError.indexOf(item)}>{item}</Text>
						)	
					})}
				</View>

				<TextInput
					placeholder="Email"
					autoCapitalize='none'
					keyboardType='email-address'
					style={styles.input_text}
					onChangeText={email => this.setState({email: email})}
				/>

				{this.state.emailError != '' &&
					<Text style={[styles.error_text, {marginBottom: 30}]}>
						{this.state.emailError}
					</Text>
				}

				<WideButton
					callback={() => {this.validate()}} 
					text='Register' 
					textColor={Colors.lightTextColor} 
					backgroundColor={Colors.eventColor} 
					disabled={this.state.username == '' || this.state.password == '' || this.state.email == ''} 
				/>

				<View style={styles.secondary_button}>
					<Text style={styles.secondary_button_text}>Already have an account? </Text>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
						<Text style={[styles.secondary_button_text, {textDecorationLine: 'underline'}]}>Log in</Text>
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
		backgroundColor: Colors.backgroundColor,
		paddingHorizontal: 5+'%',

	},
	input_text: {
		borderBottomWidth: 1,
		fontSize: 20,
		borderBottomColor: 'black',
		marginVertical: 15,
		padding: 10,
		width: '90%',
		fontFamily: Fonts.text,
		alignSelf: 'center'
	},
	title: {
	    fontSize: 30,
	    marginBottom: 10,
	    textAlign: 'center',
	    fontFamily: Fonts.header
	},
	secondary_button: {
		marginTop: 15, 
		flexDirection: 'row', 
		justifyContent: 'center'
	},
	secondary_button_text: {
		fontSize: 18,
		fontFamily: Fonts.text
	},
	error_text: {
		color: 'red', 
		textAlign: 'center',
		fontFamily: Fonts.text,
	}
});
