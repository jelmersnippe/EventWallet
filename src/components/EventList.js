import React, { Component } from 'react'
import { 
    View,
} from 'react-native'

import { 
    EventItem,
 } from './index'

export default class EventList extends Component {
    render() {
        return (
            <View>
                {this.props.data.map(
                    (item) => {
                        console.log(item)
                        return <EventItem item={item} key={item.id}/>
                    }
                )}
            </View>
        );
    }
}
