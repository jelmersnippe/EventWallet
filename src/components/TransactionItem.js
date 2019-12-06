import React, { Component } from 'react'
import {
    View, 
    Text,
    StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

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
                    <Icon name='coins' size={30} color="#F6CF3A" style={{padding:10}} />
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
        borderWidth: 1,
        marginBottom: 10,
    },
    datetime: {
        width: 100+'%', 
        padding: 5,
        textAlign: 'center',
        backgroundColor: 'rgb(200,200,200)',
        fontSize: 16,
    },
    transaction_info: {
        flexDirection: 'row',
        width: 100+'%',

    },
    user_info: {
        flex: 8,
        flexDirection: 'row',
        margin: 5,

    },
    user_info_title: {
        alignItems: "flex-end",
        marginRight: 5,
    },
    amount: {
        flex: 1,
        textAlignVertical: "center",
        textAlign: 'right',
        paddingRight: 7,
        fontSize: 20

    }
})