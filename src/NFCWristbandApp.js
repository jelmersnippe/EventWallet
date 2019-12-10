import React from 'react'

import { createSwitchNavigator, createAppContainer, getActiveChildNavigationOptions } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { 
    AuthLoading, 
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

const activeTabColor = 'tomato'
const inactiveTabColor = 'gray'


const TransactionStack = createStackNavigator(
    {
        Transactions: {
            screen: Transactions,
            navigationOptions: {
                header: null,
            }
        },
        WalletLink: WalletLink,
        BuyTokens: {
            screen: BuyTokens,
            navigationOptions: {
                header: null,
            }
        }
    },
    {
        initialRouteName: 'Transactions'
    }
)

TransactionStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    }
}

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
                else if (routeName == 'Content'){
                    iconName = 'info'
                }

                return <Icon name={iconName} size={25} color={tintColor} />
            },
        }),
        tabBarOptions: {
            activeTintColor: activeTabColor,
            inactiveTintColor: inactiveTabColor
        }
    }
)

SpecificEventContent.navigationOptions = ({ navigation }) => {
    let headerShown = true;
    if (getActiveChildNavigationOptions(navigation).tabBarVisible == false) {
        headerShown = false;
    }
  
    return {
        headerShown,
    };
}

const EventStack = createStackNavigator(
    {
        Overview: EventOverview,
        SpecificEvent: SpecificEventContent,
    },
    {
        initialRouteName: 'Overview'
    }
)

EventStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
  
    return {
        tabBarVisible,
    };
};

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
    }

)

FriendStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};


const AppStack = createBottomTabNavigator(
    {
        Events: EventStack,
        Friends: FriendStack,
    },
    {
        initialRouteName: 'Events',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor}) => {
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
            activeTintColor: activeTabColor,
            inactiveTintColor: inactiveTabColor
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

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: AuthLoading,
            App: AppStack,
            Auth: AuthStack,
        },
        {
            initialRouteName: 'AuthLoading'
        }
    )
);
