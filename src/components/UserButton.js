import React, { Component } from 'react'
import { 
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Fonts } from './GlobalVariables'


class UserButton extends Component {
    render(){
        return (
            <TouchableOpacity
                    style={[
                        styles.button_container, 
                        {backgroundColor: this.props.backgroundColor, borderColor: this.props.borderColor}
                    ]}
                    onPress={() => {
                        this.props.item.status == 'friend'
                        ? this.props.navigation.navigate('ShareTokens', {friend: this.props.item})
                        : console.log('no nav')
                    }}
                >
                    <Text style={[styles.button_text, {color: this.props.textColor}]}>{this.props.text}</Text>
                    <Icon name={this.props.icon} size={15} color={this.props.textColor} />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button_container: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10, },
        shadowOpacity: 1,
        shadowRadius: 6.27,
        elevation: 4,
    },
    button_text: {
        marginRight: 5,
        fontSize: 18,
        fontFamily: Fonts.text
    },
})


export default withNavigation(UserButton)