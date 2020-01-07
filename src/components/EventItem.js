import React, { Component } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { Colors, Fonts } from './GlobalVariables'

class EventItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event: {}
        }
    }

    componentDidMount(){
        this.setState({event: this.props.item})
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.info}>
                    <Text style={styles.datetime}>{this.state.event.datetime}</Text>
                    <Text style={styles.name}>{this.state.event.name}</Text>
                    <Text style={styles.location}>{this.state.event.location}</Text>
                </View>

                <TouchableOpacity
                    style={styles.wallet_button}
                    onPress={() => this.props.navigation.navigate('Transactions', 
                    { 
                        updateAmount: (amount) => {
                            updatedEvent = this.state.event
                            updatedEvent.amount = amount
                            this.setState({event: updatedEvent})
                        },
                        item: this.state.event })}
                >
                    {this.state.event.amount != undefined ?
                        <View style={styles.tokens}>
                            <Text style={styles.tokens_text}>{this.state.event.amount}</Text>
                            <Icon name='coins' size={20} color={Colors.coinIconColor} />
                        </View>
                        :
                        <Text style={styles.register_text}>Register</Text>
                    }
                    <Icon name='angle-right' size={40} color='#80868B' />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 5,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    info: {
        width: 65 + '%',
    },
    datetime: {
        color: '#80868B',
        textTransform: 'uppercase',
        fontSize: 12,
        paddingLeft: 10,
        fontFamily: Fonts.text
    },
    name: {
        fontSize: 22,
        color: Colors.darkTextColor,
        fontFamily: Fonts.eventname
    },
    location: {
        color: '#505155',
        paddingLeft: 10,
        fontFamily: Fonts.text
    },
    wallet_button: {
        backgroundColor: 'white',
        width: 30 + '%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5, },
        shadowOpacity: 1,
        shadowRadius: 6,
        elevation: 5,
    },
    tokens: {
        flexDirection: 'row',
        alignItems: 'center',
        fontFamily: Fonts.text,
    },
    tokens_text: {
        fontSize: 20,
        padding: 5,
        fontFamily: Fonts.text,
    },
    register_text: {
        color: Colors.darkTextColor,
        fontSize: 18,
        fontFamily: Fonts.text,
        // textShadowColor: 'black',
        // textShadowRadius: 1,
    }
})

export default withNavigation(EventItem)