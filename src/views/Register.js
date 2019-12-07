import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	TouchableOpacity,
	Keyboard
} from 'react-native';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			usernameError: '',
			validatePassword: true,
			password: '',
			passwordError: '',
			validatePassword: true,
			email: '',
			emailError: '',
			validateEmail: true
		}
	}

	validateEmail = (email) => {
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

		this.setState({ email: email })

		if (email == '') {
			return false;
		}

		if (reg.test(email) === false) {
			this.setState({ emailError: "Invaid email" })
		}
		else if (reg.test(email) === true) {
			this.setState({ emailError: 'Valid email' });
		}

		return reg.test(email);
	};

	validatePassword = (password) => {
		let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

		this.setState({ password: password })

		if (password == '') {
			return false;
		}

		if (reg.test(password) === false) {
			this.setState({ passwordError: "Invalid password" })
		}
		else if (reg.test(password) === true) {
			this.setState({ passwordError: "Valid password" });
		}

		return reg.test(password);
	};

	validateUsername = (username) => {
		let reg = /^[a-zA-Z0-9]{5,}$/

		this.setState({ username: username })

		if (username == '') {
			return false;
		}

		if (reg.test(username) === false) {
			this.setState({ usernameError: "Invalid username" })
		}
		else if (reg.test(username) === true) {
			this.setState({ usernameError: "Valid username" })
		}

		return reg.test(username);
	};

	validate = () => {
		if (this.state.username == '' || this.state.password == '' || this.state.email == '') {
			alert('One or more fields have not been filled out');
			return;
		}

		if (this.validateUsername(this.state.username) === false) {
			alert('Invalid input, check input comments');
			return;
		}
		else if (this.validatePassword(this.state.password) === false) {
			alert('Invalid input, check input comments');
			return;
		}
		else if (this.validateEmail(this.state.email) === false) {
			alert('Invalid input, check input comments');
			return;
		}

		alert('Thank you, you registered successfully');
	}



	render() {
		return (
			<View style={styles.container}>

				<TextInput
					placeholder="Username"
					style={styles.textstyle}
					onChangeText={username => this.validateUsername(username)}
					value={this.state.username}
				/>
				<Text style={{ color: 'red', textAlign: 'center' }}>
					{this.state.usernameError}
				</Text>

				<TextInput
					placeholder="Password"
					style={styles.textstyle}
					secureTextEntry={true}
					onChangeText={password => this.validatePassword(password)}
					value={this.state.password}
				/>
				<Text style={{ color: 'red', textAlign: 'center' }}>
					{this.state.passwordError}
				</Text>

				<TextInput
					placeholder="Email"
					style={styles.textstyle}
					onChangeText={email => this.validateEmail(email)}
					value={this.state.email}
				/>
				<Text style={{ color: 'red', textAlign: 'center' }}>
					{this.state.emailError}
				</Text>


				<TouchableOpacity
					onPress={this.validate}
					style={{ backgroundColor: 'red', padding: 10, width: 150 }}
				>
					<Text style={{
						color: 'white', textAlign: 'center',
						fontSize: 20, fontWeight: 'bold'
					}}>Submit</Text>
				</TouchableOpacity>

			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	textstyle: {
		borderWidth: 1, borderColor: '#ccc',
		margin: 10, padding: 10, width: '90%'
	}
});