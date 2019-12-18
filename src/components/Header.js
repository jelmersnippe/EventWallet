import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Fonts, shadow, headerShadow } from './GlobalVariables'

import SidebarMenu from './SidebarMenu'

export default class Header extends Component {
    renderMenu() {
        return (
            <SidebarMenu ref='SidebarMenu' {...this.props} />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[this.props.shadow && headerShadow, styles.header_bar, { backgroundColor: this.props.backgroundColor }]}>

                    {this.props.backButton 
                    ?
                    <TouchableOpacity 
                        style={styles.icon}
                        onPress={() => {
                            this.props.navigation.goBack();
                        }}
                    >
                        <Icon name='arrow-left' size={25} color={this.props.textColor} />
                    </TouchableOpacity>
                    :
                    <View style={styles.icon}></View>
                    }

                    <Text style={[styles.text, {color: this.props.textColor}]}>
                        {this.props.text}
                    </Text>

                    <TouchableOpacity
                        style={styles.icon}
                        onPress={() => this.refs.SidebarMenu.toggleMenu()}
                    >
                        <Icon name='cog' size={25} color={this.props.textColor} />
                    </TouchableOpacity>

                </View>
                {this.renderMenu()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 100 + '%',
    },
    header_bar: {
        flexDirection: 'row',
        height: 100 + '%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        flex: 8,
        textAlign: 'center',
        fontSize: 24,
        fontFamily: Fonts.topheader
    },
    icon: {
        flex: 1,
        alignItems: 'center',
    },
})
