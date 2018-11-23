import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View >
        <Text>Welcome to React Native!</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { showcase } = state
  return { showcase }
};

export default connect(mapStateToProps)(Home);