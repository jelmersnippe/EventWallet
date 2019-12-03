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
                <View style={styles.info}>
                    <Text>Date time</Text>
                    <Text style = { styles.name }>{this.props.festival}</Text>
                    <Text>Location</Text>
                </View>
                <View style={styles.tokens}>
                    <Text>Arrow</Text>
                    <Text style = { styles.amount }>{this.props.amount}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-between",
        width: 100+'%',
        backgroundColor: 'rgb(200,200,200)',
        marginVertical: 10,
    },
    info: {
        width: 70+'%',    
    },
    tokens: {

    },
    name: {
        width: 70+'%',
        borderWidth: 1,
        textAlign: 'center',
        padding: 15
    },
    amount: {
        width: 30+'%',
        borderWidth: 1,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
})

export default withNavigation(EventItem)