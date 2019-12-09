import React, { Component } from 'react'
import { 
    View, 
	Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { withNavigation } from 'react-navigation'

class LoginForm extends Component {
    login () {
        // Make call to validate login attempt, for now just redirect to app
        this.props.navigation.navigate('App')
    }

    render() {
        return (
            <View style={styles.container}>
				<Text style={styles.header}>Login page</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Username'
                    //placeholderTextColor='rgba(255,255,255,0.8)'
                />
                <TextInput 
                    style={styles.input}
                    placeholder='Password'
                    //placeholderTextColor='rgba(255,255,255,0.8)'
                />

				<TouchableOpacity style={styles.button}
					onPress={this.validate}

				>
					<Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold',}}>
					    Login
					</Text>
				</TouchableOpacity>
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
    input: {
		borderBottomWidth: 1,
		fontSize: 20,
		borderBottomColor: 'black',
		margin: 15,
		padding: 10,
		width: '90%',
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
    button: {
        borderRadius: 15,
        backgroundColor: '#F6CF3A',
        padding: 10,
        width: 150,
        width: '90%',
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        color: 'black',
        //paddingTop: 15
   	}
});

export default withNavigation(LoginForm)
  