import React, { Component } from 'react'
import { 
    View, 
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import TransactionList from '../components/TransactionList';

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
        sender: 'Pieter',
        receiver: 'Sander',
        amount: '-5',
        datetime: '21/07 19:23'
    },
    {
        id: 3,
        sender: 'Jelmer',
        receiver: 'Sander',
        amount: '-5',
        datetime: '21/07 19:23'
    },
    {
        id: 4,
        sender: 'Jan',
        receiver: 'Pedro',
        amount: '+11',
        datetime: '21/07 19:23'
    },
    {
        id: 5,
        sender: 'Pieter',
        receiver: 'Sander',
        amount: '+3',
        datetime: '21/07 19:23'
    },
    {
        id: 6,
        sender: 'Pieter',
        receiver: 'Sander',
        amount: '-4',
        datetime: '21/07 19:23'
    },
    {
        id: 7,
        sender: 'Pieter',
        receiver: 'Sander',
        amount: '+6',
        datetime: '21/07 19:23'
    }
];

export default class Transactions extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style = { styles.amount }>{this.props.navigation.getParam('amount')}</Text>
                    <TouchableOpacity
                        style = { styles.cta_button }
                        onPress = {() => {this.props.navigation.navigate('BuyTokens')}}
                    >
                        <Text style = { styles.cta_button_text}>Add currency</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress = {() => {this.props.navigation.navigate('WalletLink')}}
                >
                    <Text style={{marginTop: 10, padding: 10}}>Wallet link</Text>
                </TouchableOpacity>

                <Text style={{marginTop: 10, padding: 10}}>Transaction History</Text>

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
    },
    header: {
        flexDirection: "row",
        width: 100+'%',
        height: 20+'%',
        justifyContent: "space-evenly",
    },
    amount: {
        width: 50+'%',
        textAlign: "center",
        textAlignVertical: "center",

        borderWidth: 1,
    },
    cta_button: {
        width: 50+'%',
        backgroundColor: 'rgb(100,100,255)',
    },
});
