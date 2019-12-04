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
            <SafeAreaView>
                <Text style={styles.title}>Attending festivals</Text>
                <FlatList
                contentContainerStyle='center'
                    style={styles.list}
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
    title: {
        width: 100+'%',
        textAlign: 'center',
        marginVertical: 10,
    },
    list: {
        width: 100+'%',
        backgroundColor: 'gray'
    }
})
