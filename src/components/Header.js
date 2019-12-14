import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
    SafeAreaView
} from 'react-native';
import Drawer from 'react-native-drawer'
import Icon from 'react-native-vector-icons/FontAwesome5';

const menu = [
    { 'title': 'Home' },
    { 'title': 'legal disclaimer' },
    { 'title': 'Contact' },
    { 'title': 'Log out' }
]

export default class Home extends Component {
    constructor(props) {
        super(props)
    }

    renderDrawer() {
        return (
            <View style={styles.menuContainer}>
                <FlatList
                    type='overlay'
                    style={{ flex: 0.9 }}
                    data={menu}
                    extraData={this.state}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity style={styles.menuTitleContainer}>
                                <Text style={styles.menuTitle}
                                    key={index}>
                                    {item.title}
                                </Text>
                            </TouchableOpacity>
                        )
                    }} />
            </View>
        )
    }

    openDrawer() {
        this.drawer.open()
    }

    closeDrawer() {
        this.drawer.close()
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaStyle}>
                <View style={styles.mainContainer}>
                    <Drawer
                        ref={(ref) => this.drawer = ref}
                        content={this.renderDrawer()}
                        type='displace'
                        tapToClose={true}
                        openDrawerOffset={0.40}
                        styles={drawerStyles}>
                        <View style={styles.headerContainer}>
                            <View style={styles.menuButton}>
                                <TouchableOpacity>
                                    <Icon name='arrow-left' size={25} color='white' />
                                </TouchableOpacity>

                                <Text style={styles.headerTitle}>Friendlist</Text>

                                <TouchableOpacity
                                    onPress={this.openDrawer.bind(this)}>
                                    <Icon name='cog' size={25} color='white' />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.menuButton} />
                        </View>
                    </Drawer>
                </View>
            </SafeAreaView>
        );
    }
}

const drawerStyles = {
    drawer: {
        flex: 0.5,
        backgroundColor: '#3B5998',
    },
    main: {
        flex: 1,
        backgroundColor: 'white'
    }
}

const styles = {
    mainContainer: {
        flex: 1.0,
        backgroundColor: 'white'
    },
    safeAreaStyle: {
        flex: 0.1,
        backgroundColor: 'transparent',
    },
    headerContainer: {
        height: 40,
        flexDirection: 'row',
        backgroundColor: '#3B5998',
    },
    headerTitle: {
        flex: 8.0,
        textAlign: 'center',
        alignSelf: 'center',
        color: 'white',
        fontSize: 21
    },
    menuButton: {
        flexDirection: 'row',
        alignSelf: 'center',
        tintColor: 'white',
        padding: 5
    },
    menuContainer: {
        paddingTop: 45,
        flex: 1.0,
        backgroundColor: '#3B5998',
    },
    menuTitleContainer: {

        alignItem:'center',
        height: 45,
        width:'100%',
        flexDirection:'row',
    },
    menuTitle: {
        width:'100%',
        color: 'white',
        textAlign: 'center',
        fontSize: 17,
        alignSelf:'center',
    }
}