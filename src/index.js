import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import { Colors, Fonts, appName } from './components/GlobalVariables'

import { createRootNavigator } from './router'
import { isSignedIn } from './services/AuthAPI'

import {
    PinCode
} from './components'

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            signedIn: false,
            checkedSignIn: false,
            pin: '',
            showPinOverlay: false,
            pinEntered: false,
        };
    }

    componentDidMount() {
        isSignedIn()
            .then(response => {
                this.setState({ signedIn: response, checkedSignIn: true })
                this.openPinOverlay()
            })
            .catch(error => alert('An error occurred: ' + error));
    }

    openPinOverlay = async () => {
        this.setState({pinEntered: false})
        this.setState({showPinOverlay: true})
    }


    render() {
        const { checkedSignIn, signedIn } = this.state;

        if (!checkedSignIn) {
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>{appName}</Text>
                </View>
            );
        }

        const Layout = createRootNavigator(signedIn);

        const App = () => {
            return  (
                <View style={{flex:1, width: 100+'%', height: 100+'%'}}>
                    <Layout />
                    {this.state.showPinOverlay && 
                        <PinCode 
                            callback={(code) => {
                                this.setState({pin: code})
                                this.setState({pinEntered: true})
                                this.setState({showPinOverlay: false})

                                console.log(code)
                            }} 
                        />
                    }
                </View>
            )
        }
        return <App />;
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