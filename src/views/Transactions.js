import React, { Component } from 'react'
import { 
    View, 
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import {
    TransactionList,
    HeaderText,
    RegularButton,
    WideButton
} from '../components';

const transactions = [
    {
        id: 1,
        sender: 'Henk',
        receiver: 'Maarten',
        amount: '+10',
        datetime: '24/07 19:23'
    },
    {
        id: 2,
        sender: 'Henk',
        receiver: 'Maarten',
        amount: '-10',
        datetime: '24/07 19:23'
    },
];

export default class Transactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event: this.props.navigation.getParam('item'),
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style = { styles.amount_text }>You have {this.state.event.amount} tokens</Text>
                    <RegularButton callback={() => {this.props.navigation.navigate('BuyTokens')}} icon='angle-right' text={'Buy Tokens'} backgroundColor='#0070C0' />
                </View>

                <WideButton callback={() => {this.props.navigation.navigate('WalletLink')}} text='Wallet link' icon='angle-right' />

                <HeaderText text='Transaction History' />
                <TransactionList
                    transactionData={transactions}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9Fb',
        paddingHorizontal: 3+'%'
    },
    header: {
        flexDirection: 'row',
        width: 100+'%',
        justifyContent: 'space-evenly',
        marginVertical: 15,
    },
    amount_text: {
        width: 40+'%',
        height: 70,
        fontSize: 24,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    wallet_button: {
        flexDirection: 'row',
        height: 50,
        width: 100+'%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    wallet_button_text: {
        fontSize: 20,
        textAlign: 'center',
        padding: 4,
        marginRight: 10,
    }

});