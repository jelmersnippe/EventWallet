import React, { Component } from 'react'
import { 
    SafeAreaView,
    FlatList,
    StyleSheet
} from 'react-native'

import TransactionItem from './TransactionItem'

export default class TransactionList extends Component {
    render() {
        return (
            <SafeAreaView>
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
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
