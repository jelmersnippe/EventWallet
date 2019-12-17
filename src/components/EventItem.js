import React, { Component } from 'react'
import { 
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { Colors } from './GlobalVariables'

class EventItem extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <View style={styles.info}>
                    <Text style={styles.datetime}>{this.props.item.datetime}</Text>
                    <Text style={styles.name}>{this.props.item.name}</Text>
                    <Text style={styles.location}>{this.props.item.location}</Text>
                </View>

                <TouchableOpacity 
                    style={styles.wallet_button}
                    onPress={() => this.props.navigation.navigate('Transactions', {item: this.props.item})}
                >
                    <View style={styles.tokens}>
                        <Text style={styles.tokens_text}>{this.props.item.amount}</Text>
                        <Icon name='coins' size={20} color={Colors.eventColor}/>
                    </View>
                    <Icon name='angle-right' size={40} color="#80868B" />
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

        borderTopWidth: 1,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    info: {
        width: 70+'%',
    },
    datetime: {
        color: '#80868B',
        textTransform: 'uppercase',
        fontSize: 12,
        paddingLeft: 10,
    },  
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2D2D2D'
    },
    location: {
        color: '#505155',
        paddingLeft: 10,
    },
    wallet_button: {
        width: 30+'%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
    },
    tokens: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    tokens_text: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 3,
    },
})

export default withNavigation(EventItem)