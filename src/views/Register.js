import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Switch,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'

import {
	HeaderText,
	WideButton,
	PinCode,
	AuthInput,
} from '../components'
import { Colors, Fonts, appName } from '../components/GlobalVariables'

import { SignUp } from '../services/AuthAPI'

const usernameLimit = 255
const emailLimit= 255
const passwordLimit = 255

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			usernameError: '',

			password: '',
			passwordError: [],
			passwordRepeat: '',
			passwordRepeatError: '',

			email: '',
			emailError: '',

			termsAgreed: false,
			timesPinEntered: 0,

			pin: '',
			showPinOverlay: false,
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

	validatePassword = (password, passwordRepeat) => {
		this.setState({ passwordError: [] })
		if (password == '') {
			this.addPasswordError("This field can't be empty")
			return false;
		}

		if(password.length > passwordLimit){
			this.addPasswordError("No more than " + passwordLimit + " characters allowed")
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
		this.setState({ passwordRepeatError: '' })

		if (password.length < 8) {
			validPassword = false
			errors.push(length_error)
		}
		if (password.search(digit_reg) < 0) {
			validPassword = false
			errors.push(digit_error)
		}
		if (password.search(uppercase_reg) < 0) {
			validPassword = false
			errors.push(uppercase_error)
		}
		if (password.search(lowercase_reg) < 0) {
			validPassword = false
			errors.push(lowercase_error)
		}
		if (password.search(symbol_reg) < 0) {
			validPassword = false
			errors.push(symbol_error)
		}

		if (!validPassword) {
			this.addPasswordError('Invalid password');
			errors.forEach(error => {
				this.addPasswordError(error)
			})
		}

		if (password != passwordRepeat) {
			validPassword = false
			this.setState({ passwordRepeatError: 'Passwords do not match' })
		}


		return validPassword;
	}

	validateUsername = (username) => {
		this.setState({ usernameError: '' })
		if (username == '') {
			this.setState({ usernameError: "This field can't be empty" })
			return false;
		}

		let reg = /^[a-zA-Z0-9]{1,}$/

		if (!reg.test(username)) {
			this.setState({ usernameError: "Invalid username\nOnly alphanumeric characters are allowed" })
			return false;
		}

		if(username.length > usernameLimit){
			this.setState({ usernameError: "Invalid username.\nNo more than " + usernameLimit + " characters allowed" })
			return false;
		}

		return true;
	}

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

		if(email.length > emailLimit){
			this.setState({ emailError: "Invalid email.\nNo more than " + emailLimit + " characters allowed" })
			return false;
		}

		return true;
	}

	validate = () => {
		let validUsername = this.validateUsername(this.state.username)
		let validPassword = this.validatePassword(this.state.password, this.state.passwordRepeat)
		let validEmail = this.validateEmail(this.state.email)

		if (validUsername && validEmail && validPassword && this.state.termsAgreed) {
			this.setState({ showPinOverlay: true })
		}
		else {
			this.setState({ termsAgreed: false })
			alert('Invalid input. Please correct the comments')
		}
	}

	render() {
		return (
			<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
				<View style={styles.container}>
					{this.state.showPinOverlay && this.state.timesPinEntered == 0 &&
						<PinCode
							callback={(pin) => {
								this.setState({ pin: pin, timesPinEntered: this.state.timesPinEntered + 1 })
							}}
							cancelAction={() => this.setState({showPinOverlay: false, pin: '', timesPinEntered: 0 })}
							text='Enter a pin'
						/>
					}

					{this.state.showPinOverlay && this.state.timesPinEntered > 0 &&
						<PinCode
							callback={(pin) => {
								if (this.state.pin == pin) {
									SignUp(this.state.username, this.state.password, this.state.email, pin)
										.then(response => {
											alert('Thank you, you registered successfully')
											this.props.navigation.navigate('Login')
										})
										.catch(error => {
											alert('Something went wrong during the registration process: ' + error + '\nPlease try again')
											this.setState({showPinOverlay: false, pin: '', timesPinEntered: 0 })
										})
								} else {
									alert("Entered pins don't match. Please try again")
									this.setState({showPinOverlay: false, pin: '', timesPinEntered: 0 })
								}
							}}
							cancelAction={() => this.setState({showPinOverlay: false, pin: '', timesPinEntered: 0 })}
							text='Confirm your pin'
						/>
					}


					<View style={{ paddingHorizontal: 5 + '%', paddingVertical: 30 }}>
						<Text style={styles.title}>{appName}</Text>

						<HeaderText text='Register' />

						<View>
							<AuthInput
								text='Username'
								placeholder='Username'
								onChangeText={input => this.setState({ username: input })}
								singleError={this.state.usernameError}
								maxLength={usernameLimit}
							/>

							<AuthInput
								text='Email'
								placeholder='Email'
								keyboardType='email-address'
								onChangeText={input => this.setState({ email: input })}
								singleError={this.state.emailError}
								maxLength={emailLimit}
							/>

							<AuthInput
								text='Password'
								placeholder='Password'
								password={true}
								onChangeText={input => this.setState({ password: input })}
								errorList={this.state.passwordError}
								maxLength={passwordLimit}
							/>

							<AuthInput
								text='Re-enter password'
								placeholder='Re-enter password'
								password={true}
								onChangeText={input => this.setState({ passwordRepeat: input })}
								singleError={this.state.passwordRepeatError}
								maxLength={passwordLimit}
							/>
						</View>

						<View style={styles.legal_disclaimer}>
							<Switch onValueChange={() => this.setState({ termsAgreed: !this.state.termsAgreed })} value={this.state.termsAgreed} />
							<View>
								<Text style={[styles.secondary_button_text, { color: this.state.termsAgreed ? 'black' : 'red' }]}>By registering, I agree to the </Text>
								<TouchableOpacity onPress={() => this.props.navigation.navigate('AuthTermsOfUse')}>
									<Text style={[styles.secondary_button_text, { color: this.state.termsAgreed ? 'black' : 'red', textDecorationLine: 'underline' }]}>Terms of Use</Text>
								</TouchableOpacity>
							</View>
						</View>


						<WideButton
							callback={() => { this.validate() }}
							text='Register'
							textColor={Colors.lightTextColor}
							backgroundColor={Colors.eventColor}
							disabled={this.state.username == '' || this.state.password == '' || this.state.email == ''}
						/>

						<View style={styles.secondary_button}>
							<Text style={styles.secondary_button_text}>Already have an account? </Text>
							<TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
								<Text style={[styles.secondary_button_text, { textDecorationLine: 'underline' }]}>Log in</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: Colors.backgroundColor,
	},
	title: {
		fontSize: 30,
		marginBottom: 10,
		textAlign: 'center',
		fontFamily: Fonts.header
	},
	legal_disclaimer: {
		flexDirection: 'row',
		width: 90 + '%',
		alignSelf: 'center',
		marginBottom: 15,
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
});
