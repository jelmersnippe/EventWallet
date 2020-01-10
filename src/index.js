import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import { Colors, Fonts, appName } from './components/GlobalVariables'

import { createRootNavigator } from './router'
import { isSignedIn, RefreshToken, signOut, setToken, setPin } from './services/AuthAPI'

import {
    PinCode
} from './components'

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            signedIn: false,
            checkedSignIn: false,
            showPinOverlay: false,
        };
    }

    componentDidMount() {
        isSignedIn()
            .then(() => {
                this.setState({showPinOverlay: true})
            })
            .catch(() => {
                this.setState({checkedSignIn: true, signedIn: false})
            })
    }

    logOut(){
        this.setState({signedIn: false})
    }

    checkPin(){
        this.setState({checkedSignIn: false})
    }

    render() {
        const { checkedSignIn, signedIn } = this.state;

        if (!checkedSignIn) {
            return (
            <View style={{flex:1, width: 100+'%', height: 100+'%'}}>
                <View style={styles.container}>
                    <Text style={styles.title}>{appName}</Text>
                </View>

                {this.state.showPinOverlay && 
                        <PinCode 
                            callback={(pin) => {
                                RefreshToken(pin)
                                .then(refreshedToken => {
                                    setToken(refreshedToken)
                                    setPin(pin)
                                    this.setState({signedIn: true})
                                    
                                })
                                .catch(error => {
                                    alert('Error entering pin: ' + error)
                                    signOut()
                                    this.setState({signedIn: false})
                                })
                                this.setState({checkedSignIn: true, showPinOverlay: false})
                            }} 
                        />
                    }
            </View>
            );
        }

        const Layout = createRootNavigator(signedIn)

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