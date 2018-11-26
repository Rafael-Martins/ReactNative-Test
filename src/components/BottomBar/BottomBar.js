import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addItem } from '../../actions/cartActions'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import navigationService from '../../services/navigationService'

class BottomBar extends Component {
  constructor(props) {
    super(props)
  }

  goToCart = () => {
    navigationService.navigate('Cart', { userName: 'Lucy' })
  }

  render() {
    const itemsNumbers = Object.keys(this.props.cart.itemsOnCart).length

    return (
      <View style={styles.mainContainer}>
        <TouchableHighlight onPress={this.goToCart}>
          <View style={styles.iconContainer}>
            <Icon name="shopping-basket" size={20} color="white" />
            <Text style={{ color: 'white' }}> {itemsNumbers}</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const mapStateToProps = state => {
  const { cart } = state
  return { cart }
}

export default connect(mapStateToProps)(BottomBar)
