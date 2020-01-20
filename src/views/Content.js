import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

import { appName, Colors, Fonts, headerShadow } from '../components/GlobalVariables'
import { GetSpecificEvent, GetEvent } from '../services/EventAPI'

export default class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            event: {},
        }
    }

    componentDidMount() {
        GetSpecificEvent()
            .then(eventID => {
                GetEvent(eventID)
                    .then(event => {
                        this.setState({ event: event })
                    })
                    .catch(error => {
                        alert('Could not find get data for the event you are trying to view:\n' + error)
                    })
            })
            .catch(error => {
                alert('Could not find event you are trying to view:\n' + error)
            })
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.header, headerShadow]}>
                    <Text style={styles.name}>{this.state.event.name}</Text>
                </View>

                <Text style={styles.text}>{appName}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor
    },
    header: {
        backgroundColor: Colors.eventColor,
    },
    name: {
        padding: 10,
        fontSize: 25,
        fontFamily: Fonts.topheader,
        color: Colors.lightTextColor,
    },
    text: {
        fontSize: 30,
        color: Colors.eventColor,
        textAlign: 'center',
        marginTop: 30+'%',
    },
})