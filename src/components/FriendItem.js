import React, { Component } from 'react'
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome5'

class FriendItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.name}>{this.props.item.name}</Text>

                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        style={[
                            styles.button_container, 
                            {backgroundColor: '#0070C0'}
                        ]}
                        onPress={() => {this.props.navigation.navigate('ShareTokens', {friend: this.props.item})}}
                    >
                        <Text style={styles.button_text}>Share</Text>
                        <Icon name='coins' size={20} color="white" style={styles.button_icon} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.button_container, 
                            {backgroundColor: 'red'}
                        ]}
                    >
                        <Text style={styles.button_text}>Remove</Text>
                        <Icon name='times' size={20} color="white" style={styles.button_icon} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 100+'%',
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlignVertical: 'center',
        alignItems: 'center',

        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,

        backgroundColor: 'white',
        marginBottom: 10,
    },
    name_container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    remove_button: {
        paddingHorizontal: 10,
    },
    name: {
        fontSize: 22,
    },
    button_container: {
        flexDirection: 'row',
        borderWidth: 1,
        borderBottomColor: 'black',
        borderRadius: 10,
        padding: 5,
        justifyContent: 'space-between',
    },
    button_text: {
        marginRight: 5,
        fontSize: 18,
        color: 'white'
    },
    button_icon: {
        padding: 2,
    }
})


export default withNavigation(FriendItem)