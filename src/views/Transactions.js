import React, { Component } from 'react'
import { 
    View, 
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { ScrollView } from 'react-native-gesture-handler';

import {
    TransactionList,
    HeaderText,
    RegularButton,
} from '../components';
import { Colors, Fonts } from '../components/GlobalVariables'

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
                        <Text style={styles.name}>{this.state.event.name}</Text>
                    </View>
                    <TouchableOpacity 
                        onPress={() => {this.props.navigation.navigate('WalletLink')}}
                        style={styles.qr_code_button}
                    >
                        <Icon style={styles.qr_code_button_icon} name='qrcode' size={25} color='black' />
                        <Icon style={styles.qr_code_button_icon} name='angle-right' size={40} color='black' />
                    </TouchableOpacity>
                </View>

                
                <View style={styles.padded_container}>
                    <View style={styles.token_info}>
                        <Text style = { styles.amount_text }>You have {this.state.event.amount} tokens</Text>
                        <RegularButton 
                            callback={() => {this.props.navigation.navigate('BuyTokens', {event: this.state.event })}} 
                            icon='angle-right' 
                            text={'Buy Tokens'} 
                            textColor='black' 
                            borderColor={Colors.ctaButtonBorderColor} 
                            backgroundColor={Colors.ctaButtonColor} 
                        />
                    </View>
                    <HeaderText text='Transaction History' textColor={Colors.darkTextColor} barColor={Colors.darkTextColor} />
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
        backgroundColor: Colors.eventColor
    },
    event_info: {
        flex: 7,
    },
    name: {
        fontSize: 25,
        color: Colors.lightTextColor,
        fontFamily: Fonts.topheader
    },
    qr_code_button: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,

        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10, },
        shadowOpacity: 1,
        shadowRadius: 6.27,
        elevation: 10,
    },
    qr_code_button_icon: {
        paddingHorizontal: 3,
    },
    padded_container: {
        paddingHorizontal: 3+'%', 
        backgroundColor: Colors.backgroundColor,
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
        fontFamily: Fonts.text,
        color: Colors.darkTextColor,
    },
});