import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles'
import {INIT_REQUEST} from '../../services/http'
import { bindActionCreators } from 'redux';
import { setInit } from '../../actions/showcaseActions';


class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    INIT_REQUEST().then((response) => {
      this.props.setInit(response.data)
    })
  }

  render() {
    return (
      <View >
        <Text>Welcome to React Native!</Text>
        <Text>{this.props.showcase.initObj.name}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { showcase } = state
  return { showcase }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setInit,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);