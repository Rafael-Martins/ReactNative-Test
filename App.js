import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import testReducer from './src/reducers/showcaseReducer';
import Navigation from './src/navigation'

const store = createStore(testReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Navigation/>
      </Provider>
    );
  }
}