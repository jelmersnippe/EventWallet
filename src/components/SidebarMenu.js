import React, { Component } from 'react'
import {
    Text,
    Animated,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

export default class SidebarMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuVisible: false,
            animation: new Animated.Value(0)
        }
    }

    toggleMenu = () => {
        this.setState((prevState) => {
            Animated.spring(this.state.animation, {
                toValue: prevState.isMenuVisible ? 0 : 1,
            }).start()
            return {
                isMenuVisible: !prevState.isMenuVisible
            }
        })
    }

    render() {
        return (
            <Animated.View style={{
                left: this.state.animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [600, 100]
                })
            }}>
                <TouchableOpacity
                    style={styles.menu_item}
                    onPress={this.toggleMenu}
                >
                    <Text>Hide menu</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menu_item}
                    onPress={() => { console.log('hello') }}
                >
                    <Text>Log out</Text>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    menu_item: {
        backgroundColor: 'white', 
        borderWidth: 1, 
        padding: 10
    }
})
