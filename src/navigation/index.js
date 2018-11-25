import Home from '../screens/Home'
import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

const RootStack = createStackNavigator(
  {
    Home: Home,
  },
  {
    headerMode: 'none',
  }
)

const AppContainer = createAppContainer(RootStack)

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
