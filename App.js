import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import showcaseReducer from './src/reducers/showcaseReducer'
import cartReducer from './src/reducers/cartReducer'
import Navigation from './src/navigation'
import BottomBar from './src/components/BottomBar'

const rootReducer = combineReducers({
  showcase: showcaseReducer,
  cart: cartReducer,
})

const store = createStore(rootReducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Navigation />

          <BottomBar />
        </View>
      </Provider>
    )
  }
}
