import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { ScrollView } from 'react-native-gesture-handler';

import {
    TransactionList,
    HeaderText,
    RegularButton,
} from '../components';
import { Colors, Fonts, headerShadow } from '../components/GlobalVariables'

import { GetTransactionHistory, CreateWallet } from '../services/TransactionAPI'

export default class Transactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event: this.props.navigation.getParam('item'),
            registerInProgress: false,
            transactionHistoryFound: false,
            transactionData: []
        }
    }

    componentDidMount() {
        this.fetchTransactionHistory(this.state.event.uid)
    }

    fetchTransactionHistory(event) {
        GetTransactionHistory(event).then(response => {
            this.setState({ transactionData: response })
            this.setState({ transactionHistoryFound: true })

            let updatedEvent = this.state.event
            updatedEvent.amount = response[0].balance_after
            this.setState({event: updatedEvent})
        })
    }

    addTransaction(transaction){
        let updatedTransactions = this.state.transactionData
        updatedTransactions.unshift(transaction)
        this.setState({transactionData: updatedTransactions})

        let updatedEvent = this.state.event
        updatedEvent.amount = transaction.balance_after
        this.setState({event: updatedEvent})

        this.props.navigation.state.params.updateAmount(transaction.balance_after)
    }

    render() {
        return (
            <ScrollView
                style={styles.container}
                stickyHeaderIndices={[1]}
                showsVerticalScrollIndicator={false}
                bounces={false}
            >
                <View style={[styles.header, headerShadow]}>
                    <View style={styles.event_info}>
                        <Text style={styles.name}>{this.state.event.description}</Text>
                    </View>
                    {this.state.event.amount != undefined &&
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('WalletLink', {
                                event: this.state.event.uid
                            })}
                            style={styles.qr_code_button}
                        >
                            <AntDesign style={styles.qr_code_button_icon} name='qrcode' size={45} color={Colors.darkTextColor} />
                            <Icon style={styles.qr_code_button_icon} name='angle-right' size={35} color={Colors.darkTextColor} />
                        </TouchableOpacity>
                    }
                </View>

                <View style={styles.padded_container}>
                    {this.state.event.amount != undefined
                        ?
                        <View style={styles.token_info}>
                            <Text style={styles.amount_text}>You have {this.state.event.amount} tokens</Text>
                            <RegularButton
                                callback={() => {this.props.navigation.navigate('BuyTokens', { 
                                    updateTransactions: (transaction) => this.addTransaction(transaction),
                                    event: this.state.event
                                })}}
                                icon='angle-right'
                                text={'Buy Tokens'}
                                textColor={Colors.darkTextColor}
                                borderColor={Colors.ctaButtonBorderColor}
                                backgroundColor={Colors.ctaButtonColor}
                            />
                        </View>
                        :
                        <View style={styles.token_info}>
                            
                            <Text style={styles.amount_text}>You are not registered</Text>
                            <RegularButton
                            
                                callback={() => {
                                    this.setState({registerInProgress: true})
                                    CreateWallet(this.state.event.uid)
                                        .then(response => {
                                            this.props.navigation.state.params.updateAmount(0)
                                            this.fetchTransactionHistory(this.state.event.uid)
                                            this.setState({registerInProgress: false})
                                        })
                                }}
                                icon='angle-right'
                                text={'Register'}
                                textColor={Colors.darkTextColor}
                                borderColor={Colors.ctaButtonBorderColor}
                                backgroundColor={Colors.ctaButtonColor}
                                disabled={this.state.registerInProgress}
                            />
                        </View>
                    }

                    {this.state.event.amount != undefined &&
                        <HeaderText text='Transaction History' textColor={Colors.darkTextColor} barColor={Colors.darkTextColor} />
                    }
                </View>

                {this.state.transactionHistoryFound &&
                    <View style={styles.padded_container}>
                        <TransactionList
                            data={this.state.transactionData}
                        />
                    </View>
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 100 + '%',
        padding: 10,
        backgroundColor: Colors.eventColor,
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
        height: 55,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
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
        paddingHorizontal: 3 + '%',
        backgroundColor: Colors.backgroundColor,
    },
    token_info: {
        flexDirection: 'row',
        width: 100 + '%',
        justifyContent: 'space-evenly',
        marginTop: 15,
    },
    amount_text: {
        width: 40 + '%',
        height: 70,
        fontSize: 24,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: Fonts.text,
        color: Colors.darkTextColor,
    },
    no_transaction_history: {
        marginTop: 10,
        fontSize: 16,
        textAlign: 'center',
    }
});