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
            <View>
                <View style={styles.container}>
                    <Text style={styles.datetime}>{this.props.datetime}</Text>
                    <View style={styles.transaction_info}>
                        <View style={{flexDirection: 'row', flex: 6, justifyContent: 'flex-start'}}>
                            <View style={styles.user_info_title}>
                                <Icon name='arrow-right' size={25} color='green' style={{padding: 9}} />
                            </View>

                            <Text style={styles.user_info_content}>{this.props.receiver}</Text>
                        </View>

                        <View style={{flexDirection: 'row', flex: 2}}>
                            <Text style={styles.amount}>{this.props.amount}</Text>
                            <Icon name='coins' size={30} color='#F6CF3A' style={{padding: 9}} />
                        </View>
                    </View>
                </View>


                <View style={styles.container}>
                    <Text style={styles.datetime}>{this.props.datetime}</Text>
                    <View style={styles.transaction_info}>
                        <View style={{flexDirection: 'row', flex: 6, justifyContent: 'flex-start'}}>
                            <View style={styles.user_info_title}>
                                 <Icon name='arrow-left' size={25} color='red' style={{padding: 9}} />
                            </View>

                            <Text style={styles.user_info_content}>{this.props.receiver}</Text>
                        </View>

                        <View style={{flexDirection: 'row', flex: 2}}>
                            <Text style={styles.amount}>{this.props.amount}</Text>
                            <Icon name='coins' size={30} color='#F6CF3A' style={{padding: 9}} />
                        </View>
                    </View>
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
        flex: 1,
        flexDirection: 'row',
        margin: 5,
    },
    user_info_title: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
        //flex: 2,
    },
    user_info_content: {
        flex: 6,
        fontSize: 20,
        textAlignVertical: 'center',
    },
    amount: {
        flex: 2,
        textAlignVertical: 'center',
        textAlign: 'right',
        marginRight: 7,
        fontSize: 20,
        flexDirection: 'row'
    }
})