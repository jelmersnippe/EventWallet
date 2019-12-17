import React, { Component } from 'react'
import {
    View, 
    Text,
    StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { Colors, Fonts } from './GlobalVariables'

export default class TransactionItem extends Component {
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Text style={styles.datetime}>{this.props.item.datetime}</Text>
                    <View style={styles.transaction_info}>
                            {this.props.item.sender == 'Me' 
                            ? 

                        <View style={styles.user_info}>
                            <Icon style={styles.user_info_icon} name='arrow-left' size={25} color='red' />
                            <Text style={styles.user_info_text}>{this.props.item.receiver}</Text>
                        </View>

                        :
                        <View style={styles.user_info}>
                            <Icon style={styles.user_info_icon} name='arrow-right' size={25} color='green' />
                            <Text style={styles.user_info_text}>{this.props.item.sender}</Text>
                        </View>
    }

                        <View style={styles.amount}>
                            <Text style={styles.amount_text}>{this.props.item.sender == 'Me' ? '-' : '+'}{this.props.item.amount}</Text>
                            <Icon style={styles.amount_icon} name='coins' size={30} color={Colors.coinIconColor} />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 100+'%',
        borderBottomWidth: 1,
        marginBottom: 10,
        fontFamily: Fonts.text
    },
    datetime: {
        width: 100+'%', 
        padding: 5,
        textAlign: 'center',
        backgroundColor: Colors.eventColor,
        fontSize: 16,
        fontFamily: Fonts.text,
        color: Colors.textColor,
        borderRadius: 10,
    },
    transaction_info: {
        flexDirection: 'row',
        width: 100+'%',
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontFamily: Fonts.text
    },
    user_info: {
        flexDirection: 'row', 
        flex: 6, 
        alignItems: 'center',
        fontFamily: Fonts.text
    },
    user_info_text: {
        fontSize: 20,
        paddingLeft: 5,
        textAlignVertical: 'center',
        fontFamily: Fonts.text
    },
    amount: {
        flexDirection: 'row', 
        justifyContent: 'space-evenly',
        flex: 2,
        fontFamily: Fonts.text
    },
    amount_text: {
        textAlignVertical: 'center',
        textAlign: 'right',
        fontSize: 20,
        fontFamily: Fonts.text
    },
})