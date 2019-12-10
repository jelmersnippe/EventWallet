import React, { Component } from 'react'
import { 
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome5'

class UserButton extends Component {
    render(){
        return (
            <TouchableOpacity
                    style={[
                        styles.button_container, 
                        {backgroundColor: this.props.backgroundColor}
                    ]}
                    onPress={() => {
                        this.props.item.status == 'friend'
                        ? this.props.navigation.navigate('ShareTokens', {friend: this.props.item})
                        : console.log('no nav')
                    }}
                >
                    <Text style={styles.button_text}>{this.props.text}</Text>
                    <Icon name={this.props.icon} size={20} color="white" style={styles.button_icon} />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
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


export default withNavigation(UserButton)