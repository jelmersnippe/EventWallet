import React, { Component } from 'react'
import { 
    SafeAreaView,
    Text,
    FlatList,
    StyleSheet,
} from 'react-native'

import EventItem from './EventItem'

export default class EventList extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Events</Text>
                <FlatList
                    data={this.props.festivalData}
                    renderItem={({ item }) => (
                        <EventItem
                            festival={item.festival}
                            amount={item.amount}
                            key={item.festival}
                        />
                    )}
                    keyExtractor={item => item.festival}
                />
            </SafeAreaView>
        );
    }
}
  
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5+'%',
    },
    title: {
        marginVertical: 10,
        marginRight: 5,
        textAlign: 'right',
        textTransform: "uppercase",
        fontSize: 18,
    }
})
