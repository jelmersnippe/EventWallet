import React, { Component } from 'react'
import { 
    createSwitchNavigator, 
    createAppContainer
} from 'react-navigation'
import {
    createBottomTabNavigator 
} from 'react-navigation-tabs'

import { Login, Profile, Tickets, Wallet } from './views'

const Tabs = createBottomTabNavigator({
    profile: Profile,
    tickets: Tickets,
    wallet: Wallet
})

const MainNavigator = createSwitchNavigator({
    login: {screen: Login},
    main: Tabs,
  })
  
const AppContainer = createAppContainer(MainNavigator)


export default class NFCWristbandApp extends Component {
    render() {
        return (
            <AppContainer />
        );
    }
}
