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
                <TouchableOpacity style={{marginRight: 10, marginLeft: 15, marginTop: 5, flex: 1}}>
                    <Icon name='times' size={35} color="#80868B" style={{padding:0}} />
                </TouchableOpacity>

                <Text style={styles.name}>{this.props.name}</Text>

                <View style={styles.button_container}>
                    <TouchableOpacity style={{flexDirection: 'row'}}
                        onPress={() => {this.props.navigation.navigate('ShareTokens')}}
                    >
                        <Text style={styles.button}>Share</Text>
                        <Icon name='coins' size={20} color="white" style={{padding:2, marginLeft: 6}} />
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        //alignItems: 'left',
        justifyContent: 'flex-start',
        textAlignVertical: 'center',
        alignItems: 'center',

        width: 94+'%',
        paddingBottom: 10,
        marginHorizontal: 3+'%',
        //marginRight: 3 +'%',
        borderBottomColor: 'black',
        borderWidth: 1,
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 10,
        //flex: 1
    },
    name: {
        fontSize: 22,
        //padding: 3,
        flex: 5,
        marginTop: 5
        //

    },
    button_container: {
        marginTop: 9,
        flex: 2,
        borderWidth: 1,
        borderBottomColor: 'black',
        borderRadius: 10,
        marginRight: 10,
        padding: 3,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#0070C0'
    },
    button: {
        fontSize: 18,
        color: 'white'
    },
})


export default withNavigation(FriendItem)