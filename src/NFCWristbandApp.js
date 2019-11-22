import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import { AuthLoading, Login, Register, ForgotPassword, FestivalOverview, FestivalTransactions } from './views'

// const AppStack = createBottomTabNavigator(
//     {
//     Profile: Profile,
//     Tickets: Tickets,
//     Wallet: Wallet
//     },
//     {
//         initialRouteName: 'Profile'
//     }
// )

const AppStack = createStackNavigator(
    {
        FestivalOverview: FestivalOverview,
        FestivalTransactions: FestivalTransactions
    },
    {
        initialRouteName: 'FestivalOverview'
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
