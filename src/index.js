import React from 'react';

import {
    View,
    Text,
} from 'react-native'

import { createSwitchNavigator, createAppContainer, getActiveChildNavigationOptions } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import IonIcon from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import {
    Login,
    Register,
    ForgotPassword,
    AuthLoading,

    EventOverview,
    Transactions,
    WalletLink,
    BuyTokens,
    Announcements,
    Content,

    FriendOverview,
    ShareTokens,

    TermsOfUse,
    Contact,
    FAQ,
} from './views'
import { Colors, Fonts, appName } from './components/GlobalVariables'

const TransactionStack = createStackNavigator(
    {
        Transactions: {
            screen: Transactions,
            navigationOptions: {
                header: null,
            }
        },
        WalletLink: {
            screen: WalletLink,
            navigationOptions: ({ navigation }) => ({
                header: null,
            })
        },
        BuyTokens: {
            screen: BuyTokens,
            navigationOptions: {
                header: null,
            }
        }
    },
    {
        initialRouteName: 'Transactions',
        navigationOptions: ({ navigation }) => {
            let tabBarVisible = true;
            if (navigation.state.index > 0) {
                tabBarVisible = false;
            }

            return {
                tabBarVisible,
            }
        }
    }
)

const SpecificEventContent = createBottomTabNavigator(
    {
        Transactions: TransactionStack,
        Announcements: Announcements,
        Content: Content
    },
    {
        initialRouteName: 'Transactions',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName == 'Transactions') {
                    iconName = 'coins'
                }
                else if (routeName == 'Announcements') {
                    iconName = 'bullhorn'
                }
                else if (routeName == 'Content') {
                    iconName = 'info'
                }

                return <Icon name={iconName} size={25} color={tintColor} />
            },
        }),
        tabBarOptions: {
            activeTintColor: Colors.activeTabColor,
            inactiveTintColor: Colors.inactiveTabColor
        }
    }
)

const EventStack = createStackNavigator(
    {
        Overview: EventOverview,
        SpecificEvent: SpecificEventContent,
    },
    {
        initialRouteName: 'Overview',
        defaultNavigationOptions: ({ navigation }) => {
            return {
                header: (
                    <View style={{flexDirection: 'row', backgroundColor: Colors.eventColor}}>
                        <Text style={{padding: 8, fontSize: 25, fontFamily: Fonts.topheader, flex: 10, color: 'white'}}>
                            EventWallet
                        </Text>

                        <Icon
                        name='bars'
                        size={30}
                        style={{alignItems: 'center', padding: 9, flex: 1, color: 'white'}}
                        onPress={() => navigation.openDrawer()}
                        />
                    </View>
                )
            }
        },
        navigationOptions: ({ navigation }) => {
            let tabBarVisible = true;
            if (navigation.state.index > 0) {
                tabBarVisible = false;
            }

            return {
                tabBarVisible,
            };
        }
    }
)

const FriendStack = createStackNavigator(
    {
        Overview: FriendOverview,
        ShareTokens: {
            screen: ShareTokens,
            navigationOptions: {
                header: null,
            }
        }
    },
    {
        initialRouteName: 'Overview',
        navigationOptions: ({ navigation }) => {
            let tabBarVisible = true;
            if (navigation.state.index > 0) {
                tabBarVisible = false;
            }

            return {
                tabBarVisible,
            };
        },
        defaultNavigationOptions: ({ navigation }) => {
            return {
                header: (
                    <View style={{flexDirection: 'row', backgroundColor: Colors.eventColor}}>
                        <Text style={{padding: 8, fontSize: 25, fontFamily: Fonts.topheader, flex: 10, color: 'white'}}>
                            EventWallet
                        </Text>

                        <Icon
                        name='bars'
                        size={30}
                        style={{alignItems: 'center', padding: 9, flex: 1, color: 'white'}}
                        onPress={() => navigation.openDrawer()}
                        />
                    </View>
                )
            }
        },
    }

)


const MainApp = createBottomTabNavigator(
    {
        Events: EventStack,
        Friends: FriendStack,
    },
    {
        initialRouteName: 'Events',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName == 'Friends') {
                    iconName = 'users'
                }
                else if (routeName == 'Events') {
                    iconName = 'wallet'
                }

                return <Icon name={iconName} size={25} color={tintColor} />
            }
        }),
        tabBarOptions: {
            activeTintColor: Colors.activeTabColor,
            inactiveTintColor: Colors.inactiveTabColor
        }
    }
)

const AuthStack = createStackNavigator(
    {
        Login: Login,
        Register: Register,
        ForgotPassword: ForgotPassword,
        AuthTermsOfUse: TermsOfUse
    },
    {
        headerMode: 'none',
        initialRouteName: 'Login'
    }
)

const FAQStack = createStackNavigator(
    {
        FAQ: FAQ,
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                header: (
                    <View style={{flexDirection: 'row', backgroundColor: Colors.eventColor}}>
                        <Text style={{padding: 8, fontSize: 25, fontFamily: Fonts.topheader, flex: 10, color: 'white'}}>
                            EventWallet
                        </Text>

                        <Icon
                        name='bars'
                        size={30}
                        style={{alignItems: 'center', padding: 9, flex: 1, color: 'white'}}
                        onPress={() => navigation.openDrawer()}
                        />
                    </View>
                )
            }
        },
    }
)

const TermsOfUseStack = createStackNavigator(
    {
        TermsOfUse: TermsOfUse,
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                header: (
                    <View style={{flexDirection: 'row', backgroundColor: Colors.eventColor}}>
                        <Text style={{padding: 8, fontSize: 25, fontFamily: Fonts.topheader, flex: 10, color: 'white'}}>
                            EventWallet
                        </Text>

                        <Icon
                        name='bars'
                        size={30}
                        style={{alignItems: 'center', padding: 9, flex: 1, color: 'white'}}
                        onPress={() => navigation.openDrawer()}
                        />
                    </View>
                )
            }
        },
    }
)

const ContactStack = createStackNavigator(
    {
        Contact: Contact,
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                header: (
                    <View style={{flexDirection: 'row', backgroundColor: Colors.eventColor}}>
                        <Text style={{padding: 8, fontSize: 25, fontFamily: Fonts.topheader, flex: 10, color: 'white'}}>
                            EventWallet
                        </Text>

                        <Icon
                        name='bars'
                        size={30}
                        style={{alignItems: 'center', padding: 9, flex: 1, color: 'white'}}
                        onPress={() => navigation.openDrawer()}
                        />
                    </View>
                )
            }
        },
    }
)

const AppDrawer = createDrawerNavigator(
    {
        App: {
            screen: MainApp,
                navigationOptions: {
                    drawerIcon: () => (
                        <Icon name="arrow-right" color={Colors.lightTextColor} size={18}/>
                        )
                    },
                    title: {appName}
                },

        FAQ:  {
            screen: FAQStack,
                navigationOptions: {
                    drawerIcon: () => (
                       <FontAwesome name="question" color={Colors.lightTextColor} size={20} />
                    ),
                    title: 'FAQ'
                }
            },
        Contact:  {
            screen: ContactStack,
                navigationOptions: {
                    drawerIcon: () => (
                         <IonIcon name="md-contact" color={Colors.lightTextColor} size={20}/>
                    ),
                    title: 'Contact'
                }
            },
            TermsOfUse:  {
            screen: TermsOfUseStack,
                navigationOptions: {
                    drawerIcon: () => (
                        <Icon name="balance-scale" color={Colors.lightTextColor} size={15}/>
                    ),
                    title: 'Terms of use'
                }
            },
        LogOut:  {
            screen: props => <AuthLoading {...props} screenProps={{signOut: true}} />,
                navigationOptions: {
                    drawerIcon: () => (
                        <Feather name="log-out" color={Colors.lightTextColor} size={18}/>
                    ),
                    title: 'Log out'
            },
        }
    },
    {
        initialRouteName: 'App',
        drawerPosition: 'right',
        drawerBackgroundColor: Colors.darkEventColor,
        contentOptions: {
            activeTintColor: Colors.lightTextColor,
            inactiveTintColor: Colors.lightTextColor,
            activeBackgroundColor: Colors.eventColor,
            labelStyle: {fontSize: 17}
        }
    }
)


const MainSwitch = createSwitchNavigator(
    {
        SignedIn: AppDrawer,
        SignedOut: AuthStack,
        AuthLoading: AuthLoading
    },
    {
        initialRouteName: 'AuthLoading',
    }
)

const App = createAppContainer(MainSwitch)

export default App;
