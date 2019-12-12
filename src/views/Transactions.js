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
} from '../components';
import { ScrollView } from 'react-native-gesture-handler';

const transactions = [
    {
        id: 1,
        sender: 'Me',
        receiver: 'Maarten',
        amount: '10',
        datetime: '24/07 19:23'
    },
    {
        id: 2,
        sender: 'Henk',
        receiver: 'Me',
        amount: '10',
        datetime: '24/07 19:23'
    },
    {
        id: 3,
        sender: 'Event',
        receiver: 'Me',
        amount: '20',
        datetime: '24/07 19:23'
    },
    {
        id: 4,
        sender: 'Me',
        receiver: 'Event stand #2',
        amount: '4',
        datetime: '24/07 19:23'
    },
    {
        id: 5,
        sender: 'Me',
        receiver: 'Event stand #5',
        amount: '6',
        datetime: '24/07 19:23'
    },
    {
        id: 6,
        sender: 'Me',
        receiver: 'Event stand #1',
        amount: '2',
        datetime: '24/07 19:23'
    },
    {
        id: 7,
        sender: 'Me',
        receiver: 'Event stand #3',
        amount: '4',
        datetime: '24/07 19:23'
    },
    {
        id: 8,
        sender: 'Berend110',
        receiver: 'Me',
        amount: '8',
        datetime: '24/07 19:23'
    },
    {
        id: 9,
        sender: 'Me',
        receiver: 'Event stand #2',
        amount: '8',
        datetime: '24/07 19:23'
    },
    {
        id: 10,
        sender: 'Event',
        receiver: 'Me',
        amount: '10',
        datetime: '24/07 19:23'
    },
    {
        id: 11,
        sender: 'Me',
        receiver: 'Berend110',
        amount: '8',
        datetime: '24/07 19:23'
    },
    {
        id: 12,
        sender: 'Me',
        receiver: 'Event stand #4',
        amount: '2',
        datetime: '24/07 19:23'
    },
    {
        id: 13,
        sender: 'Me',
        receiver: 'HuisbaasBob',
        amount: '5',
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
            <ScrollView 
                style={styles.container}
                stickyHeaderIndices={[1]}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <View style={styles.event_info}>
                        <Text style={styles.datetime}>{this.state.event.datetime}</Text>
                        <Text style={styles.name}>{this.state.event.name}</Text>
                        <Text style={styles.location}>{this.state.event.location}</Text>
                    </View>
                    <TouchableOpacity 
                        onPress={() => {this.props.navigation.navigate('WalletLink')}}
                        style={styles.wallet_button}    
                    >
                        <Icon style={styles.wallet_button_icon} name='qrcode' size={25} color='black' />
                        <Icon style={styles.wallet_button_icon} name='angle-right' size={40} color='black' />
                    </TouchableOpacity>
                </View>

                
                <View style={styles.padded_container}>
                    <View style={styles.token_info}>
                        <Text style = { styles.amount_text }>You have {this.state.event.amount} tokens</Text>
                        <RegularButton callback={() => {this.props.navigation.navigate('BuyTokens')}} icon='angle-right' text={'Buy Tokens'} backgroundColor='#0070C0' />
                    </View>
                    <HeaderText text='Transaction History' />
                </View>

                <View style={styles.padded_container}>
                    <TransactionList
                        data={transactions}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 100+'%',
        padding: 10,
        backgroundColor: '#F6CF3A'
    },
    event_info: {
        flex: 7,
    },
    datetime: {
        color: '#80868B',
        textTransform: 'uppercase',
        fontSize: 12,
        paddingLeft: 10,
    },  
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#2D2D2D'
    },
    location: {
        color: '#505155',
        paddingLeft: 10,
    },
    wallet_button: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,

        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 20,
    },
    wallet_button_icon: {
        paddingHorizontal: 3,
    },
    padded_container: {
        paddingHorizontal: 3+'%', 
        backgroundColor: '#F8F9Fb',
    },
    token_info: {
        flexDirection: 'row',
        width: 100+'%',
        justifyContent: 'space-evenly',
        marginTop: 15,
    },
    amount_text: {
        width: 40+'%',
        height: 70,
        fontSize: 24,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
});