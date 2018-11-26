import Home from '../screens/Home'
import Products from '../screens/Products'
import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

const RootStack = createStackNavigator(
  {
    Home: Home,
    Products: Products,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  }
)

const AppContainer = createAppContainer(RootStack)

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
