import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import { AuthLoading, Login, Register, ForgotPassword, Profile, Tickets, Wallet } from './views'

const AppStack = createBottomTabNavigator(
    {
    Profile: Profile,
    Tickets: Tickets,
    Wallet: Wallet
    },
    {
        initialRouteName: 'Profile'
    }
)

const AuthStack = createStackNavigator(
    {
        Login: Login,
        Register: Register,
        ForgotPassword: ForgotPassword
    },
    {
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
