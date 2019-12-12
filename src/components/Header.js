import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Header extends Component {
    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.props.backgroundColor }]}>

                <TouchableOpacity style={styles.icon}>
                    <Icon name='arrow-left' size={25} color='white' />
                </TouchableOpacity>

                <Text
                    style={styles.header_text}>

                    {this.props.text}
                </Text>

                <TouchableOpacity style={styles.icon} >
                    <Icon name='cog' size={25} color='white' />
                </TouchableOpacity>

            </View>

        )
    }

}

const styles = StyleSheet.create({
    container: {
        width: 100 + '%',
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    header_text: {
        flex: 8,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 21,

    },
    icon: {
        flex: 1,
        alignItems: 'center',
    }

})