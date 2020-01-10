import React from 'react';

import { createSwitchNavigator, createAppContainer, getActiveChildNavigationOptions } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import Icon from 'react-native-vector-icons/FontAwesome5'

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
    ShareTokens
} from './views'
import { Colors } from './components/GlobalVariables'

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
                headerRight: (
                    <Icon
                    name='cog'
                    size={30}
                    style={{paddingRight: 10}}
                    onPress={() => navigation.openDrawer()}
                    />
                ),
                headerLeft: null
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
                headerRight: (
                    <Icon
                    name='cog'
                    size={30}
                    style={{paddingRight: 10}}
                    onPress={() => navigation.openDrawer()}
                    />
                ),
                headerLeft: null
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
        ForgotPassword: ForgotPassword
    },
    {
        headerMode: 'none',
        initialRouteName: 'Login'
    }
)

const AppDrawer = createDrawerNavigator(
    {
        App: MainApp,
        FAQ: Content,
        LegalDisclaimer: Content,
        LogOut: {
            screen: props => <AuthLoading {...props} screenProps={{signOut: true}} />
        },
    },
    {
        initialRouteName: 'App',
        drawerPosition: 'right',
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
