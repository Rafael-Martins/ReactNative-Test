import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import styles from './styles'
import { INIT_REQUEST } from '../../services/http'
import { bindActionCreators } from 'redux'
import { setInit } from '../../actions/showcaseActions'
import HomeHeader from '../../components/HomeHeader'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        INIT_REQUEST().then(response => {
            console.log(response.data.app.logo)
            this.props.setInit(response.data)
        })
    }

    render() {
        const BodyRender = () => (
            <View>
                <HomeHeader
                    place={this.props.showcase.initObj.name}
                    app={this.props.showcase.initObj.app}
                />
            </View>
        )

        const LoaderRender = () => <View />

        return (
            <View>
                <StatusBar
                    backgroundColor="rgba(0,0,0,0)"
                    barStyle="dark-content"
                    translucent={true}
                />

                {this.props.showcase.initIsLoaded ? (
                    <BodyRender />
                ) : (
                    <LoaderRender />
                )}
            </View>
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
