import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles'

class MainInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { showcase } = state
  return { showcase }
};

export default connect(mapStateToProps)(MainInput);
