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
                    <View style={styles.cta_button}>
                        <Text style = { styles.cta_button_text }>You have {this.state.event.amount} tokens</Text>
                    </View>
                    
                    <TouchableOpacity
                        style = { styles.cta_button }
                        onPress = {() => {this.props.navigation.navigate('BuyTokens')}}
                    >
                        <Text style = { styles.cta_button_text}>Buy tokens</Text>
                        <Icon name='angle-right' size={30} color='black' style={{padding:5}}/>
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
        backgroundColor: '#F8F9Fb',
    },
    header: {
        flexDirection: 'row',
        width: 100+'%',
        justifyContent: 'space-evenly',
    },
    header2: {
        marginVertical: 10,
        textAlign: 'left',
        textTransform: 'uppercase',
        fontSize: 18,
        marginHorizontal: 3+'%',
        borderBottomWidth: 1,
        paddingBottom: 5,
    },
    cta_button: {
        flexDirection: 'row',
        height: 70,
        width: 40+'%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    cta_button_text: {
        fontSize: 20,
        textAlign: 'center',
        padding: 4,
    }
});