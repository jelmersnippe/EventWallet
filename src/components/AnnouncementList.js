import React, { Component } from 'react'
import { 
    SafeAreaView,
    FlatList,
    StyleSheet
} from 'react-native'

import AnnouncementItem from './AnnouncementItem'

export default class AnnouncementList extends Component {
    render() {
        return (
            <SafeAreaView>
                <FlatList
                    data={this.props.announcementData}
                    renderItem={({ item }) => (
                        <AnnouncementItem
                            title={item.title}
                            date={item.date}
                            time={item.time}
                            announcement={item.announcement}
                            key={item.id}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        );
    }
}