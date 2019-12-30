import React, { Component } from 'react'
import {
    Animated,
    View,
    StyleSheet,
    AsyncStorage
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import IonIcon from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Colors } from './GlobalVariables'
import SidebarMenuItem from './SidebarMenuItem'

export default class SidebarMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuVisible: false,
            animation: new Animated.Value(0)
        }
    }

    removeAuthToken = async () => {
        await AsyncStorage.removeItem('AuthToken').then(
            console.log('Removed Auth Token'),
            this.forceUpdate()
        )
        // Add navigation to auth stack
    }

    toggleMenu = () => {
        this.setState((prevState) => {
            Animated.timing(this.state.animation, {
                toValue: prevState.isMenuVisible ? 0 : 1,
            }).start()
            return {
                isMenuVisible: !prevState.isMenuVisible
            }
        })
    }

    render() {
        return (
            <Animated.View style={[{alignItems: 'flex-end'}, {
                left: this.state.animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [600, 0]
                })
            }]}>
                <View style={styles.menu_container}>
                    <SidebarMenuItem
                        text='Hide menu'
                        textColor={Colors.lightTextColor}
                        callback={() => {this.toggleMenu()}}
                        icon={<Icon style={styles.icon} name="arrow-right" size={15} />}
                    />

                    <SidebarMenuItem
                        text='FAQ'
                        textColor={Colors.lightTextColor}
                        callback={() => {console.log('no nav')}}
                        icon={<FontAwesome style={styles.icon} name="question" size={18} />}
                    />

                    <SidebarMenuItem
                        text='Legal disclaimer'
                        textColor={Colors.lightTextColor}
                        callback={() => {console.log('no nav')}}
                        icon={<Icon style={styles.icon} name="balance-scale" size={15} />}
                    />

                    <SidebarMenuItem
                        text='Contact'
                        textColor={Colors.lightTextColor}
                        callback={() => {console.log('no nav')}}
                        icon={<IonIcon style={styles.icon} name="md-contact" size={20} />}
                    />

                    <SidebarMenuItem
                        text='Log out'
                        textColor={Colors.lightTextColor}
                        callback={() => {this.removeAuthToken()}}
                        icon={<Feather style={styles.icon} name="log-out" size={17} />}
                    />

                </View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    menu_container: {
        width: 50+'%',
        backgroundColor: 'white',
    },
    icon: {
        flex: 1,
        textAlign: 'center',
        color: Colors.lightTextColor,
    },
})
