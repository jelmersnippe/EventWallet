import React, { Component } from 'react'
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { withNavigation } from 'react-navigation'

class FriendItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.name}>{this.props.name}</Text>
                <TouchableOpacity
                    onPress={() => {this.props.navigation.navigate('ShareTokens')}}
                >
                    <Text style={styles.button}>Share</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.button}>Remove</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 30,
        paddingBottom: 10,
    },
    name: {
        width: 200,
        fontSize: 18,
    },
    button: {
        width: 80,
        fontSize: 18,
    }
})


export default withNavigation(FriendItem)