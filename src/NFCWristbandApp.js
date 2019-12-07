import { createSwitchNavigator, createAppContainer, getActiveChildNavigationOptions } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import { AuthLoading, Login, Register, ForgotPassword, EventOverview, Transactions, WalletLink, BuyTokens, Announcements, Content, FriendOverview, ShareTokens } from './views'

const TransactionStack = createStackNavigator(
    {
        Transactions: Transactions,
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
        initialRouteName: 'Transactions'
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
        Friends: FriendStack,
        Events: EventStack
    },
    {
        initialRouteName: 'Events'
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
