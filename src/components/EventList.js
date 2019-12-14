import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
} from 'react-native'

import { 
    EventItem,
    HeaderText
 } from './index'

export default class EventList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <HeaderText text='Events' />
                {this.props.data.map(
                    (item) => {
                        return <EventItem item={item} key={item.id}/>
                    }
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 3+'%',
    },
})
