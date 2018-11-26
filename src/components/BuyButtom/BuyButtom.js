import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

class BuyButtom extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableHighlight
        style={styles.mainContainer}
        onPress={this.props.onPress}
      >
        <View style={styles.buyNewContainer}>
          <Text>Comprar</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

BuyButtom.propTypes = {
  onPress: PropTypes.func.isRequired,
}

export default BuyButtom
