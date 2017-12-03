import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ActionCreators from '../action'
import React from 'react'
import PropTypes from 'prop-types'
import ReactNative from 'react-native'

const {
  Button,
  Text,
  View,
} = ReactNative

const LandingContainer = ({
  navigation,
}) => (
  <View style={{flex: 1, marginTop: 20, alignItems: 'center'}}>
    <View style={{ flex: 1 }}>
      <Button
        onPress={() => navigation.navigate('Demo')}
        title="Start Demo"
      />
    </View>
  </View>
)

LandingContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer)
