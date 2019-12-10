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
                    <View style={styles.amount_text_button}>
                        <Text style = { styles.amount_text }>You have {this.state.event.amount} tokens</Text>

                    </View>
                    
                    <TouchableOpacity
                        style = { styles.cta_button }
                        onPress = {() => {this.props.navigation.navigate('BuyTokens')}}
                    >
                        <Text style = { styles.cta_button_text}>Buy tokens</Text>
                        <Icon name='angle-right' size={35} color='black' />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style = {styles.wallet_button}
                    onPress = {() => {this.props.navigation.navigate('WalletLink')}}
                >
                    <Text style={styles.wallet_button_text}>Wallet link</Text>
                    <Icon name='angle-right' size={35} color='black' />
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
        backgroundColor: 'white',
        borderRadius: 20,
        flex: 1,
        margin: 15,
    },
    cta_button_text: {
        fontSize: 20,
        textAlign: 'center',
        padding: 4,
        marginRight: 10,
    },
    amount_text_button: {
        height: 70,
        width: 40+'%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
        backgroundColor: '#F8F9Fb',
        borderRadius: 10,
        flex: 1,
        margin: 15
    },
    amount_text: {
        fontSize: 24,
        textAlign: 'center',
        padding: 4,
    },
    wallet_button: {
        flexDirection: 'row',
        height: 50,
        width: 94+'%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
        backgroundColor: 'white',
        borderRadius: 20,
        marginLeft: 12,
        //borderWidth: 1,
        //borderColor: 'black',
    },
    wallet_button_text: {
        fontSize: 20,
        textAlign: 'center',
        padding: 4,
        marginRight: 10,
    }

});