import React, { Component } from 'react'
import { 
    SafeAreaView,
    FlatList
} from 'react-native'

import FriendItem from './FriendItem'

export default class FriendList extends Component {
    render() {
        return (
            <SafeAreaView>
                <FlatList
                    data={this.props.friendData}
                    renderItem={({ item }) => (
                        <FriendItem
                            name={item.name}
                            key={item.name}
                        />
                    )}
                    keyExtractor={item => item.name}
                />
            </SafeAreaView>
        );
    }
}