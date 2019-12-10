import React, { Component } from 'react'
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome5'

import UserButton from './UserButton'

class UserItem extends Component {
    setText(){
        if(this.props.item.status == 'friend') return 'Share'
        else if(this.props.item.status == 'pending') return 'Accept'
        else if(this.props.item.status == 'unknown') return 'Add'
    }

    setIcon(){
        if(this.props.item.status == 'friend') return 'coins'
        else if(this.props.item.status == 'pending') return 'user-plus'
        else if(this.props.item.status == 'unknown') return 'user-plus'
    }

    setColor(){
        if(this.props.item.status == 'friend') return '#0070C0'
        else if(this.props.item.status == 'pending') return 'green'
        else if(this.props.item.status == 'unknown') return 'yellow'
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.name_container}>
                    <TouchableOpacity style={styles.remove_button}>
                        <Icon name='times' size={15} color="gray" style={[styles.button_icon, {borderColor: 'white'}]} />
                    </TouchableOpacity>
                    <Text style={styles.name} numberOfLines={1} ellipsizeMode='tail'>{this.props.item.name}</Text>
                </View>

                
                <UserButton 
                    item={this.props.item} 
                    text={this.setText()}
                    icon={this.setIcon()}
                    backgroundColor={this.setColor()}
                />
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
        width: 55+'%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    remove_button: {
        paddingHorizontal: 5,
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
        marginRight: 5,
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


export default withNavigation(UserItem)