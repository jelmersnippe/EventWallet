import React from 'react'

import { createSwitchNavigator, createAppContainer, getActiveChildNavigationOptions } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/FontAwesome5'

import {
    Login,
    Register,
    ForgotPassword,
    EventOverview,
    Transactions,
    WalletLink,
    BuyTokens,
    Announcements,
    Content,
    FriendOverview,
    ShareTokens
} from './views'
import {
    Header,
} from './components'
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
                header: (
                    <Header backButton={true} shadow={true} text='Wallet Link' textColor={Colors.lightTextColor} backgroundColor={Colors.eventColor} navigation={navigation} />
                ),
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
        navigationOptions: ({ navigation }) => {
            let headerShown = true;
            let shadowShown = true;
            if (getActiveChildNavigationOptions(navigation).tabBarVisible == false) {
                headerShown = false;
            }

            if (headerShown) {
                if (navigation.state.index == 0) {
                    shadowShown = false;
                }
                return {
                    header: (
                        <Header backButton={true} shadow={shadowShown} text='Specific Event' textColor={Colors.lightTextColor} backgroundColor={Colors.eventColor} navigation={navigation} />
                    ),
                };

            }
            return {
                header: (
                    null
                ),
            };
        },
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
        }
    }

)


const AppStack = createBottomTabNavigator(
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

export const createRootNavigator = (signedIn = false) => {
    return createAppContainer(
        createSwitchNavigator(
            {
                SignedIn: AppStack,
                SignedOut: AuthStack,
            },
            {
                initialRouteName: signedIn ? "SignedIn" : "SignedOut",
            }
        )
    )
}
