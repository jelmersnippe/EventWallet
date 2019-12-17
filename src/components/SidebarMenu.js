import React, { Component } from 'react'
import {
    Text,
    Animated,
    View,
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
                        <Text>Contact</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menu_item}
                        onPress={() => { console.log('hello') }}
                    >
                        <Text>Fack</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menu_item}
                        onPress={() => { console.log('hello') }}
                    >
                        <Text>Log out</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    menu_container: {
        width: 60+'%',
        backgroundColor: 'white',
    },
    menu_item: {
        alignItems: 'center',
        width: 100+'%',
        backgroundColor: 'yellow', 
        borderWidth: 1, 
        padding: 10,
    }
})
