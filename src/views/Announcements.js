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
            <View style={styles.container}>
                <View style={[styles.header, headerShadow]}>
                    <Text style={styles.name}>{this.state.event.name}</Text>
                </View>

                <View style={{paddingHorizontal: 3+'%'}}>
                    <HeaderText text='Announcements' textColor={Colors.darkTextColor} barColor={Colors.darkTextColor} />
                    <ScrollView 
                        showsVerticalScrollIndicator={false}
                    >
                        <AnnouncementList 
                            data={this.state.announcements}
                        />
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
    },
    header: {
        width: 100 + '%',
        padding: 10,
        backgroundColor: Colors.eventColor,
    },
    name: {
        fontSize: 25,
        color: Colors.lightTextColor,
        fontFamily: Fonts.topheader
    },
})