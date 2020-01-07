import React, { Component } from 'react'
import {
    View, 
    Text,
    StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { Colors, Fonts } from './GlobalVariables'

export default class TransactionItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			textColor: Colors.darkTextColor
		}
	}
    
    componentDidMount(){
        this.setState({textColor: (this.props.item.amount < 0  ? 'red' : 'green')})
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Text style={styles.datetime}>{this.props.item.date_time.replace("T", " ")}</Text>
                    <View style={styles.transaction_info}>
                        {this.props.item.amount < 0 
                        ?
                        <View style={styles.user_info}>
                            <Icon style={styles.user_info_icon} name='minus' size={20} color={this.state.textColor} />
                            <Text style={styles.user_info_text}>{this.props.item.counter_wallet_uid}</Text>
                        </View>
                        :
                        <View style={styles.user_info}>
                            <Icon style={styles.user_info_icon} name='plus' size={20} color={this.state.textColor} />
                            <Text style={styles.user_info_text}>{this.props.item.counter_wallet_uid}</Text>
                        </View>
                        }

                        <View style={styles.amount}>
                            <Text style={[styles.amount_text, {color: this.state.textColor}]}>{this.props.item.amount > 0 && '+'}{this.props.item.amount}</Text>
                            <Icon style={styles.amount_icon} name='coins' size={25} color={Colors.coinIconColor} />
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
        marginTop: 10,
        fontFamily: Fonts.text,
    },
    datetime: {
        width: 100+'%', 
        padding: 5,
        textAlign: 'center',
        backgroundColor: Colors.eventColor,
        fontSize: 16,
        fontFamily: Fonts.text,
        color: Colors.lightTextColor,
        borderRadius: 10,
    },
    transaction_info: {
        flexDirection: 'row',
        width: 100+'%',
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontFamily: Fonts.text,
    },
    user_info: {
        flexDirection: 'row', 
        flex: 6, 
        alignItems: 'center',
        fontFamily: Fonts.text,
        color: Colors.darkTextColor,
    },
    user_info_text: {
        fontSize: 22,
        paddingLeft: 5,
        textAlignVertical: 'center',
        fontFamily: Fonts.text,
        color: Colors.darkTextColor,
    },
    amount: {
        flex: 2,
        flexDirection: 'row', 
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    amount_text: {
        textAlignVertical: 'center',
        textAlign: 'right',
        fontSize: 22,
        fontFamily: Fonts.text,
        color: 'green',
    },
})