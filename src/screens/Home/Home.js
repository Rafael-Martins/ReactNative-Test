import React, { Component } from 'react'
import { Text, View, StatusBar, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setInit } from '../../actions/showcaseActions'
import styles from './styles'
import { INIT_REQUEST } from '../../services/http'
import HomeHeader from '../../components/HomeHeader'
import TitleCarousel from '../../components/TitleCarousel'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    INIT_REQUEST().then(response => {
      this.props.setInit(response.data)
    })
  }

  goToProducts = productsSelected => {
    return () => {
      this.props.navigation.push('Products', {
        productsSelected,
      })
    }
  }

  render() {
    const BodyRender = () => (
      <View>
        <View style={styles.homeHeaderContainer}>
          <HomeHeader
            place={this.props.showcase.initObj.name}
            app={this.props.showcase.initObj.app}
          />
        </View>

        <View style={styles.titleCarouselContainer}>
          <TitleCarousel
            onItemPress={this.goToProducts}
            titles={this.props.showcase.initObj.titles[2]}
            isPromotion={true}
          />
        </View>

        <View style={styles.titleCarouselContainer}>
          <TitleCarousel
            onItemPress={this.goToProducts}
            titles={this.props.showcase.initObj.titles[0]}
          />
        </View>

        <View style={styles.titleCarouselContainer}>
          <TitleCarousel
            onItemPress={this.goToProducts}
            titles={this.props.showcase.initObj.titles[1]}
          />
        </View>
      </View>
    )

    const LoaderRender = () => <View />

    return (
      <ScrollView>
        <StatusBar
          backgroundColor="rgba(0,0,0,0)"
          barStyle="dark-content"
          translucent={true}
        />

        {this.props.showcase.initIsLoaded ? <BodyRender /> : <LoaderRender />}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  const { showcase } = state
  return { showcase }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setInit,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
