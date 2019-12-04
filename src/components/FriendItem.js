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

                <View style={styles.button_container}>
                    <TouchableOpacity
                        onPress={() => {this.props.navigation.navigate('ShareTokens')}}
                    >
                        <Text style={styles.button}>Share</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.button}>Remove</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100+'%',
        paddingBottom: 10,
    },
    name: {
        fontSize: 18,
    },
    button_container: {
        flexDirection: 'row'
    },
    button: {
        fontSize: 18,
        paddingHorizontal: 15,
    },
})


export default withNavigation(FriendItem)