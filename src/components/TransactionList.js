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
                <FlatList
                    data={this.props.transactionData}
                    renderItem={({ item }) => (
                        <TransactionItem
                            sender={item.sender}
                            receiver={item.receiver}
                            amount={item.amount}
                            datetime={item.datetime}
                            key={item.id}
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
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
