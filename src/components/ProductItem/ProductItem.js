import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

class ProductItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const [mainName1, mainName2] = this.props.item.name.split(' ')
    const mainName = `${mainName1} ${mainName2}`

    return (
      <View style={styles.mainContainer}>
        <Image
          source={{ uri: this.props.item.picture_url }}
          style={styles.image}
        />

        <View style={styles.infoContainer}>
          <Text style={styles.mainName}>{mainName}</Text>
          <Text style={styles.fullName}>{this.props.item.name}</Text>
        </View>
      </View>
    )
  }
}

ProductItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default ProductItem
