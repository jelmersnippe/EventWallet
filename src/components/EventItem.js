import React, { Component } from 'react'
import { 
    Text,
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
                <Text style = { styles.name }>{this.props.festival}</Text>
                <Text style = { styles.amount }>{this.props.amount}</Text>
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
    cta_button: {
        width: 100+'%',
        padding: 20,
        borderBottomWidth: 1,
    },
    cta_button_text: {
        textAlign: 'center',
    },

})

export default withNavigation(EventItem)