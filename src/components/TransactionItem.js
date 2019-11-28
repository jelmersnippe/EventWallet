import React, { Component } from 'react'
import {
    View, 
    Text,
    StyleSheet
} from 'react-native'


export default class TransactionItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.datetime}>{this.props.datetime}</Text>
                <View style={styles.transaction_info}>
                    <View style={styles.user_info}>
                        <View style={styles.user_info_title}>
                            <Text>From:</Text>
                            <Text>To:</Text>
                        </View>

                        <View style={styles.user_info_content}>
                            <Text>{this.props.sender}</Text>
                            <Text>{this.props.receiver}</Text>
                        </View>
                    </View>
                    <Text style={styles.amount}>{this.props.amount}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 100+'%',
        marginVertical: 5,
        borderWidth: 1,
    },
    datetime: {
        width: 100+'%', 
        padding: 5,
        textAlign: 'center'
    },
    transaction_info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100+'%',
        backgroundColor: 'rgb(200,200,200)',
    },
    user_info: {
        flexDirection: 'row',
        margin: 5,
    },
    user_info_title: {
        alignItems: "flex-end",
        marginRight: 5,
    },
    amount: {
        borderWidth: 1,
        textAlignVertical: "center",
        padding: 10
    }
})