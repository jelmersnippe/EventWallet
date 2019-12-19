import React, { Component } from 'react'
import { 
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Fonts, buttonShadow } from './GlobalVariables'

class UserButton extends Component {
    render(){
        return (
            <TouchableOpacity
                    style={[
                        styles.button_container, 
                        buttonShadow,
                        {backgroundColor: this.props.backgroundColor, borderColor: this.props.borderColor}
                    ]}
                    onPress={() => {
                        this.props.item.status == 'friend'
                        ? this.props.navigation.navigate('ShareTokens', {friend: this.props.item})
                        : console.log('no nav')
                    }}
                >
                    <Text style={[styles.button_text, {color: this.props.textColor}]}>{this.props.text}</Text>
                    <Icon style={styles.icon} name={this.props.icon} size={15} color={this.props.textColor} />
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
    },
    button_text: {
        marginRight: 5,
        fontSize: 18,
        fontFamily: Fonts.text,
        textShadowColor: 'black',
        textShadowRadius: 1,
    },
    icon: {
        textShadowColor: 'black',
        textShadowRadius: 1,
    }
})


export default withNavigation(UserButton)