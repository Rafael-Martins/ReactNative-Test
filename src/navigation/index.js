import Home from '../screens/Home'
import Products from '../screens/Products'
import Cart from '../screens/Cart'
import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import navigationService from '../services/navigationService'

const RootStack = createStackNavigator(
  {
    Home: Home,
    Products: Products,
    Cart: Cart,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  }
)

const AppContainer = createAppContainer(RootStack)

export default class App extends React.Component {
  render() {
    return (
      <AppContainer
        ref={navigatorRef => {
          navigationService.setTopLevelNavigator(navigatorRef)
        }}
      />
    )
  }
}
