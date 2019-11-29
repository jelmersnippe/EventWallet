import React, { Component } from 'react'
import {
    View, 
    Text,
    StyleSheet
} from 'react-native'


export default class AnnouncementItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>{this.props.title}</Text>
                    <Text>{this.props.date}</Text>
                    <Text>{this.props.time}</Text>
                </View>
                <Text>{this.props.announcement}</Text>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 100+'%',
        marginVertical: 5,
        borderWidth: 1,
    },
})