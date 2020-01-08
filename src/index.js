import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import { Colors, Fonts } from './components/GlobalVariables'

import { createRootNavigator } from './router'
import { isSignedIn } from './services/Auth'

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            signedIn: false,
            checkedSignIn: false
        };
    }

    componentDidMount() {
        isSignedIn()
            .then(response => this.setState({ signedIn: response, checkedSignIn: true }))
            .catch(error => alert('An error occurred'));
    }

    render() {
        const { checkedSignIn, signedIn } = this.state;

        if (!checkedSignIn) {
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>FestiFaggot</Text>
                </View>
            );
        }

        const Layout = createRootNavigator(signedIn);
        return <Layout />;
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