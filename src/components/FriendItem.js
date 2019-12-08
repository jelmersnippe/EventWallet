import React, { Component } from 'react'
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { withNavigation } from 'react-navigation'
//import

class FriendItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity>

                    <Text style={styles.button}>Remove</Text>
                </TouchableOpacity>

                <Text style={styles.name}>{this.props.name}</Text>

                <View style={styles.button_container}>
                    <TouchableOpacity
                        onPress={() => {this.props.navigation.navigate('ShareTokens')}}
                    >
                        <Text style={styles.button}>Share</Text>
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
        width: 94+'%',
        paddingBottom: 10,
        marginHorizontal: 3+'%',
        //marginHorizontal: 3 +'%',
        marginRight: 3 +'%',
        borderBottomColor: 'black',
        borderWidth: 1,
        backgroundColor: 'white',
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
    },
    button_container: {
        flexDirection: 'row',

        //marginLeft: 10,
    },
    button: {
        fontSize: 18,
        //paddingHorizontal: 15,
        //alignItems: 'right'
    },
})


export default withNavigation(FriendItem)