import React, { Component } from 'react'
import { 
    View,
} from 'react-native'

import { 
    AnnouncementItem 
} from './index'

export default class AnnouncementList extends Component {
    render() {
        return (
            <View>
                {this.props.data.map(
                    (item) => {
                        return <AnnouncementItem item={item} key={item.id}/>
                    }
                )}
            </View>
        );
    }
}
