import React, { Component } from 'react'
import { TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import styles from './styles'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'

class MainInput extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const placeText = <Text style={styles.place}>{this.props.place}</Text>

        return (
            <TextInput
                style={styles.input}
                editable={false}
                selectTextOnFocus={false}
            >
                <Text style={styles.mainText}>Voce esta em {placeText}</Text>
                <Icon name="map-marker" size={20} color="#7cf49e" />
            </TextInput>
        )
    }
}

MainInput.propTypes = {
    place: PropTypes.string,
}

export default MainInput
