import React, { Component } from 'react'
import { Text, View, Image, ImageBackground } from 'react-native'
import styles from './styles'

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
                        <Text>INPUT</Text>
                    </ImageBackground>
                </View>
            </View>
        )
    }
}

export default HomeHeader
