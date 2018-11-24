import React, {Component} from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';
import styles from './styles'

class HomeHeader extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <View style={styles.backgroundContainer}>
          <ImageBackground source={{uri: this.props.app.header}} style={styles.background}>
            <Text>{this.props.place}</Text>
          </ImageBackground>
          {/* <Image /> */}
        </View>
      </View>
    );
  }
}

export default HomeHeader
