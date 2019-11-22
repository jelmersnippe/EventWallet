import React, { Component } from 'react'
import { 
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { withNavigation } from 'react-navigation'

class FestivalItem extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('FestivalTransactions', {festival: this.props.festival})}
            >
                <Text>{this.props.festival}</Text>
                <Text>{this.props.amount}</Text>
            </TouchableOpacity>
        );
    }
}

export default withNavigation(FestivalItem)
  