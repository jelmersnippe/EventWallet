import React, { Component } from 'react'
import { 
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/AntDesign'

class EventItem extends Component {
    render() {
        return (
            <TouchableOpacity
                style = { styles.container }
                onPress={() => this.props.navigation.navigate('Transactions', {item: this.props.item})}
            >
                <View style={styles.info}>
                    <Text style={styles.datetime}>{this.props.item.datetime}</Text>
                    <Text style={styles.name}>{this.props.item.name}</Text>
                    <Text style={styles.location}>{this.props.item.location}</Text>
                </View>
                <View style={styles.tokens}>
                    <Icon name='right' size={30} color="#80868B" style={{padding:5}} />
                    <Text style = { styles.amount }>{this.props.item.amount} Tokens</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
  
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",

        padding: 5,

        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    info: {
        maxWidth: 70+'%',
    },
    tokens: {
        alignItems: 'center',
        justifyContent: "space-evenly",
    },
    datetime: {
        color: '#80868B',
        textTransform: 'uppercase',
        fontSize: 12,
        marginLeft: 10,
    },
    location: {
        color: '#505155',
        marginLeft: 10,
    },  
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2D2D2D'
    },
    amount: {
        fontWeight: 'bold',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
    },
})

export default withNavigation(EventItem)