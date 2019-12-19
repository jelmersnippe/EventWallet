import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    AsyncStorage
} from 'react-native'
import { Colors, Fonts } from '../components/GlobalVariables'




export default class AuthLoading extends Component {
    componentDidMount(){
        this.fetchAuthToken()
    }

    fetchAuthToken = async () => {
        try {
            const value = await AsyncStorage.getItem('AuthToken');
            if (value !== null) {
                console.log('AuthToken found: ' + value)
                this.props.navigation.navigate('App')
            } else {
                console.log('No AuthToken found')
                this.props.navigation.navigate('Auth')
            }
        } catch (error) {
            console.log('Error fetching AuthToken: ' + error)
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>FestiFaggot</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 100 + '%',
        height: 100 + '%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.eventColor,
    },
    title: {
        color: Colors.lightTextColor,
        fontFamily: Fonts.eventname,
        fontSize: 30,
    },
    button: {
        width: 80 + '%',
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.lightTextColor,
        alignItems: 'center',
        marginBottom: 20,
    },
    button_text: {
        color: Colors.lightTextColor
    }
});
