import React, { Component } from 'react'
import { 
    View,
    Text,
    FlatList,
    StyleSheet,
} from 'react-native'

import { 
    EventItem
 } from './index'

export default class EventList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Events</Text>
                <FlatList
                    data={this.props.eventData}
                    renderItem={({ item }) => (
                        <EventItem
                            item={item}
                        />
                    )}
                />
            </View>
        );
    }
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 5+'%',
    },
    title: {
        marginVertical: 10,
        paddingRight: 5,
        textAlign: 'right',
        textTransform: "uppercase",
        fontSize: 18,
    }
})
