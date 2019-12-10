import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from 'react-native';

export default class App extends Component {
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


		this.setState({ passwordError: [] })

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
		if (username == '') {
			this.setState({ usernameError: "This field can't be empty" })
			return false;
		}

		let reg = /^[a-zA-Z0-9]{5,}$/
		this.setState({ usernameError: '' })

		if (!reg.test(username)) {
			this.setState({ usernameError: "Invalid username\nMust be at least 6 characters\nOnly alphanumeric characters are allowed" })
			return false;
		}

		return true;
	};



	validateEmail = (email) => {
		if (email == '') {
			this.setState({ emailError: "This field can't be empty" })
			return false;
		}

		let reg = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/
		this.setState({ emailError: '' })

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
			alert('Thank you, you registered successfully');
		} 
		else {
			alert('Invalid input. Please correct the comments')
		}
	}



	render() {
		return (
			<View style={styles.container}>

			    <Text style={styles.header}>FestiFaggot</Text>

			    <Text style={styles.subheader}>Register</Text>

				<TextInput
					placeholder="Username"
					style={styles.textstyle}
					onChangeText={username => this.setState({username: username})}
					value={this.state.username}
				/>

                {this.state.usernameError != '' &&
                            <Text style={{ color: 'red', textAlign: 'center' }}>
                                {this.state.usernameError}
                            </Text>
                        }

				<TextInput
					placeholder="Password"
					style={styles.textstyle}
					secureTextEntry={true}
					onChangeText={password => this.setState({password: password})}
					value={this.state.password}
				/>

				<View>
					{
						this.state.passwordError.map(item => {
							return(
								<Text style={{ color: 'red', textAlign: 'center' }}>{item}</Text>
							)	
						})
					}
				</View>

				<TextInput
					placeholder="Email"
					style={styles.textstyle}
					onChangeText={email => this.setState({email: email})}
					value={this.state.email}
				/>

				<Text style={{ color: 'red', textAlign: 'center' }}>
					{this.state.emailError}
				</Text>

				<TouchableOpacity style={styles.button}
					onPress={this.validate}

				>
					<Text style={{
						textAlign: 'center',
						fontSize: 20,
						fontWeight: 'bold',

					}}>Register</Text>
				</TouchableOpacity>
				<View style={{marginTop: 15, flexDirection: 'row', justifyContent: 'center'}}>
					<Text style={{fontSize: 18}}>Already have an account? </Text>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
						<Text style={{fontSize: 18, textDecorationLine: 'underline'}}>Log in</Text>
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
		backgroundColor: '#F5FCFF',
		paddingHorizontal: 5+'%',
	},
	textstyle: {
		borderBottomWidth: 1,
		fontSize: 20,
		borderBottomColor: 'black',
		margin: 15,
		padding: 10,
		width: '90%',
	},
	header: {
	    fontSize: 30,
	    marginBottom: 10,
	    textAlign: 'center'
	},
	subheader: {
        marginVertical: 10,
        textAlign: 'right',
        paddingRight: 5,
        textTransform: 'uppercase',
        fontSize: 21,
        borderBottomWidth: 1,
        paddingBottom: 5,
	},
	button: {
	    borderRadius: 15,
	    backgroundColor: '#F6CF3A',
	    padding: 10,
	    width: 150,
	    width: '90%',
	    margin: 15,
	    borderColor: 'black',
	    borderWidth: 1,
	    color: 'black'
	},
	text_button2: {
        fontSize: 18,
        textDecorationLine: 'underline',
        marginTop: 15
    }
});
