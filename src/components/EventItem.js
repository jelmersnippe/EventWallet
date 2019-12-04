import React, { Component } from 'react'
import { 
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { withNavigation } from 'react-navigation'

class EventItem extends Component {
    render() {
        return (
            <TouchableOpacity
                style = { styles.container }
                onPress={() => this.props.navigation.navigate('SpecificEvent', {festival: this.props.festival, amount: this.props.amount})}
            >
                <View>
                    <Text>Date time</Text>
                    <Text style = { styles.name }>{this.props.festival}</Text>
                    <Text>Location</Text>
                </View>
                <View style={styles.tokens}>
                    <Text>Arrow</Text>
                    <Text style = { styles.amount }>{this.props.amount} Tokens</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        width: 90+'%',

        padding: 5,

        borderTopWidth: 1,
        borderBottomWidth: 1,

        backgroundColor: 'lightgray'
    },
    tokens: {
        alignItems: 'center',
        justifyContent: "space-evenly",
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    amount: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
    },
})

export default withNavigation(EventItem)