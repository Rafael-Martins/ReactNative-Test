import React, { Component } from 'react'
import {
  Text,
  View,
  Dimensions,
  ImageBackground,
  TouchableHighlight,
} from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'
import Carousel from 'react-native-snap-carousel'

const { width: maxDeviceWidth } = Dimensions.get('window')

class TitleCarousel extends Component {
  constructor(props) {
    super(props)

    this.itemWidth = props.isPromotion ? maxDeviceWidth - 30 : 120
    this.itemHeight = props.isPromotion ? 160 : 140
    this.itemBorderRadius = props.isPromotion ? 0 : 4
  }

  render() {
    const _renderItem = ({ item, index }) => {
      const promotionStyle = {
        height: this.itemHeight,
      }
      return (
        <TouchableHighlight
          style={styles.slide}
          onPress={this.props.onItemPress(item)}
        >
          <ImageBackground
            source={{ uri: item.picture }}
            style={[styles.background, promotionStyle]}
            imageStyle={{ borderRadius: this.itemBorderRadius }}
          >
            <Text style={styles.itemTitle}>{item.category}</Text>
          </ImageBackground>
        </TouchableHighlight>
      )
    }

    return (
      <View style={styles.mainContainer}>
        <Text style={styles.carouselTitle}>{this.props.titles.title}</Text>

        <Carousel
          ref={c => {
            this._carousel = c
          }}
          data={this.props.titles.categories}
          renderItem={_renderItem}
          sliderWidth={maxDeviceWidth}
          itemWidth={this.itemWidth}
          layout={'default'}
        />
      </View>
    )
  }
}

TitleCarousel.propTypes = {
  titles: PropTypes.object.isRequired,
  onItemPress: PropTypes.func.isRequired,
  isPromotion: PropTypes.bool,
}

export default TitleCarousel
