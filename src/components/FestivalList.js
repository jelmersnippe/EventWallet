import React, { Component } from 'react'
import { 
    FlatList,
    StyleSheet,
} from 'react-native'

import FestivalItem from './FestivalItem'

export default class FestivalList extends Component {
    render() {
        return (
            <FlatList
                data={this.props.festivalData}
                renderItem={({ item }) => (
                    <FestivalItem
                        festival={item.festival}
                        amount={item.amount}
                        key={item.festival}
                    />
                )}
                keyExtractor={item => item.festival}
            />
        );
    }
}
  