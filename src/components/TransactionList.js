import React, { Component } from 'react'
import { 
    View,
} from 'react-native'

import { 
    TransactionItem
 } from './index'

export default class TransactionList extends Component {
    render() {
        return (
            <View>
                {this.props.data.map(
                    (item) => {
                        return <TransactionItem item={item} key={item.date_time}/>
                    }
                )}
            </View>
        );
    }
}
