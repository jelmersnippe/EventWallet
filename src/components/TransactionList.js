import React, { Component } from 'react'
import { 
    View,
    FlatList,
    StyleSheet
} from 'react-native'

import { 
    TransactionItem
 } from './index'

export default class TransactionList extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.props.data.map(
                    (item) => {
                        return <TransactionItem item={item} key={item.id}/>
                    }
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 3 +'%',
    },
})
