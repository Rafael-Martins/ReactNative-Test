import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import showcaseReducer from './src/reducers/showcaseReducer'
import Navigation from './src/navigation'

const store = createStore(showcaseReducer)

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navigation />
            </Provider>
        )
    }
}
