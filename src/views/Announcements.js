import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import { 
    AnnouncementList, 
    HeaderText 
} from '../components'
import { Colors, Fonts, headerShadow } from '../components/GlobalVariables'

import { GetEvent, GetSpecificEvent, GetAnnouncements } from '../services/EventAPI'

export default class Announcements extends Component {
    constructor(props) {
        super(props);

        this.state = {
            event: {},
            announcements: [],
        }
    }

    componentDidMount(){
        GetSpecificEvent().then(eventID => {
            console.log(eventID)
            GetEvent(eventID)
            .then(event => {
                this.setState({event: event})

                GetAnnouncements(eventID)
                .then(announcements => {
                    this.setState({announcements: announcements})
                })
                .catch(error => {
                    console.log(error)
                })
            })
            .catch(error => {
                console.log(error)
            })
        })
        
    }

    render() {
        return(
            <ScrollView 
                style={styles.container}
                showsVerticalScrollIndicator={false}
                stickyHeaderIndices={[0]}
            >
                <View>
                    <View style={[styles.event_name, headerShadow]}>
                        <Text style={styles.name}>{this.state.event.name}</Text>
                    </View>
                    <View style={styles.padded_container}>
                        <HeaderText text='Announcements' textColor={Colors.darkTextColor} barColor={Colors.darkTextColor} />
                    </View>
                </View>

                <View style={styles.padded_container}>
                    <AnnouncementList 
                        data={this.state.announcements}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
    },
    padded_container: {
        paddingHorizontal: 3+'%', 
        backgroundColor: Colors.backgroundColor
    },
    name: {
        padding: 10,
        color: Colors.lightTextColor,
        backgroundColor: Colors.eventColor,
        fontSize: 25,
        fontFamily: Fonts.topheader,
    },
})