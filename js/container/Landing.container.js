import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ActionCreators from '../action'
import PropTypes from 'prop-types'
import React from 'react'
import ReactNative from 'react-native'
import styles from '../style/Landing.style'

const {
  Text,
  TouchableOpacity,
  View,
} = ReactNative

const LandingContainer = ({
  navigation,
}) => (
  <View style={styles.landingWindow}>
    <View style={styles.welcomeView}>
      <Text style={styles.welcomeText}>
        Welcome to the React Native code demo!
      </Text>
    </View>
    <View style={styles.demoButtonView}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Demo')}
        style={styles.demoButton}
      >
        <Text style={styles.buttonText}>Start Demo</Text>
      </TouchableOpacity>
    </View>
  </View>
)

LandingContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer)
