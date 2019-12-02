import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import { AuthLoading, Login, Register, ForgotPassword, EventOverview, Transactions, WalletLink, Announcements, Content, FriendOverview } from './views'

const TransactionStack = createStackNavigator(
    {
        Transactions: Transactions,
        WalletLink: WalletLink
    },
    {
        initialRouteName: 'Transactions'
    }
)

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

const EventStack = createStackNavigator(
    {
        Overview: EventOverview,
        SpecificEvent: SpecificEventContent
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
    },
    {
        initialRouteName: 'Overview'
    }
)

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
        headerMode:'none',
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
