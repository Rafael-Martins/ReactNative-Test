import React, { Component } from 'react'
import { Text, View, Image, ImageBackground } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'
import MainInput from '../MainInput'

class HomeHeader extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <View style={styles.backgroundContainer}>
                    <ImageBackground
                        source={{ uri: this.props.app.header }}
                        style={styles.background}
                    >
                        <Image
                            source={{ uri: this.props.app.logo }}
                            style={styles.logo}
                        />
                        <MainInput place={this.props.place} />
                    </ImageBackground>
                </View>
            </View>
        )
    }
}

HomeHeader.propTypes = {
    app: PropTypes.object,
    place: PropTypes.string,
}

export default HomeHeader
