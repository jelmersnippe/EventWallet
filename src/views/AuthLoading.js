import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import { Colors, Fonts, appName } from '../components/GlobalVariables'

import { isSignedIn, RefreshToken, SignOut, SetToken, SetPin } from '../services/AuthAPI'

import {
    PinCode
} from '../components'

export default class AuthLoading extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showPinOverlay: false,
        }
    }

    componentDidMount() {
        isSignedIn()
            .then(() => {
                this.setState({ showPinOverlay: true })
            })
            .catch(() => {
                this.props.navigation.navigate('SignedOut')
            })
    }

    render() {
        return (
            <View style={{ flex: 1, width: 100 + '%', height: 100 + '%' }}>
                <View style={styles.container}>
                    <Text style={styles.title}>{appName}</Text>
                </View>

                {this.state.showPinOverlay &&
                    <PinCode
                        callback={(pin) => {
                            RefreshToken(pin)
                                .then(refreshedToken => {
                                    SetToken(refreshedToken)
                                    SetPin(pin)
                                    this.props.navigation.navigate('SignedIn')
                                })
                                .catch(error => {
                                    alert('Error entering pin: ' + error)
                                    SignOut()
                                    this.props.navigation.navigate('SignedOut')
                                })
                        }}
                    />
                }
            </View>
        )
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
});