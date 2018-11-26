import React, { Component } from 'react'
import { Text, ScrollView, StatusBar } from 'react-native'
import styles from './styles'
import { GET_PRODUCTS } from '../../services/http'
import ProductItem from '../../components/ProductItem'

class Products extends Component {
  constructor(props) {
    super(props)

    this.state = {
      productsArray: [],
    }
  }

  componentDidMount() {
    const keyWords = this.props.navigation.getParam('productsSelected')
      .key_words
    GET_PRODUCTS(keyWords, 1).then(response => {
      this.setState({ productsArray: response.data.items })
      console.log(response.data.items)
    })
  }

  render() {
    return (
      <ScrollView>
        <StatusBar
          backgroundColor="rgba(0,0,0,0)"
          barStyle="dark-content"
          translucent={false}
        />

        {this.state.productsArray.map((item, index) => {
          return <ProductItem key={index} item={item} />
        })}
      </ScrollView>
    )
  }
}

export default Products
