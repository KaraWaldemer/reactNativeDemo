import { DemoStackNavigator } from '../component/Nav.component'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'

const AppContainer = ({ dispatch, nav }) => (
  <DemoStackNavigator
    navigation={addNavigationHelpers({
      dispatch,
      state: nav,
    })}
  />
)

AppContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(AppContainer)
