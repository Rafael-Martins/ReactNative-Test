import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import styles from './styles'
import { normalizePrice } from '../../services/price'

class Cart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.cart.itemsOnCart)

    const CartItems = () => {
      let items = []

      for (const key in this.props.cart.itemsOnCart) {
        const item = this.props.cart.itemsOnCart[key]
        console.log('item :', item)
        items.push(
          <View key={key}>
            <Text>{item.name}</Text>
            <Text>{item.qty}</Text>
            <Text>{normalizePrice(item.price)}</Text>
          </View>
        )
      }

      return items
    }

    return (
      <View>
        <StatusBar
          backgroundColor="rgba(0,0,0,0)"
          barStyle="dark-content"
          translucent={false}
        />

        <CartItems />
      </View>
    )
  }
}

const mapStateToProps = state => {
  const { cart } = state
  return { cart }
}

export default connect(mapStateToProps)(Cart)
