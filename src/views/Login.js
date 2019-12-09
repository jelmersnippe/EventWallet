import React, { Component } from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import LoginForm from '../components/LoginForm'

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>


                <LoginForm />

                <View style={styles.button2}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Register')}
                    >
                        <Text>To register page</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('ForgotPassword')}
                    >
                        <Text>Forgot password?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
		textAlign: 'center',
		justifyContent: 'center'
		//alignItems: 'center'
		//paddingHorizontal: 5+'%',
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
	    textAlign: 'center',
	    //justifyContent: 'center',
	    //alignItems: 'center'
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
	button2: {
	    width: '100%',
	    flexDirection: 'row',
	    justifyContent: 'center',
	    marginTop: 1,
	    
	    //marginBottom: 200,
	    //paddingTop: 50,
	}
});
