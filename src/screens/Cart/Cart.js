import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import styles from './styles'

class Cart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <Text>Long Johnson</Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  const { cart } = state
  return { cart }
}

export default connect(mapStateToProps)(Cart)
