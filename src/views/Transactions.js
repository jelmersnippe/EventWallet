import React, { Component } from 'react'
import { 
    View, 
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

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
                    <Text style = { styles.cta_button }>{this.props.navigation.getParam('amount')}</Text>


                    <TouchableOpacity
                        style = { styles.cta_button }
                        onPress = {() => {this.props.navigation.navigate('BuyTokens')}}

                    >
                        <Text style = { styles.cta_button_text}>Buy Tokens</Text>
                        <Icon name='angle-right' size={25} color="black" style={{padding:4}} />
                    </TouchableOpacity>

                </View>
                <TouchableOpacity
                    onPress = {() => {this.props.navigation.navigate('WalletLink')}}
                >
                    <Text style={styles.header2}>Wallet link</Text>
                </TouchableOpacity>

                <Text style={styles.header2}>Transaction History</Text>

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
        width: 100+'%',
        height: 100+'%',
        justifyContent: "flex-start",
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingBottom: 180
    },
    header: {
        flexDirection: "row",
        width: 100+'%',
        justifyContent: "space-between",
    },
    header2: {
        marginVertical: 10,
        textAlign: 'left',
        textTransform: "uppercase",
        fontSize: 18,
        marginHorizontal: 3 +'%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingBottom: 5,
    },
    cta_button: {
        flex: 1,
        marginVertical: 15,
        height: 70,
        backgroundColor: 'gray',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 20,
        marginHorizontal: 20,
        marginBottom: 10,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0,0,0,0.1)',
    },
    cta_button_text: {
        fontSize: 20,
        flex: 3,
        alignItems: 'center',
        justifyContent: "space-evenly",
        textAlignVertical: 'center'
     }
});
