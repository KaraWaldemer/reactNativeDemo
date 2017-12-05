import * as imageActions from '../action/image.action'
import * as locationActions from '../action/location.action'
import { Button, Image, Text, View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'

const HardwareContainer = ({
  image,
  getImage,
  getLocation,
  location,
}) => (
  <View>
    <View>
      <Text>GPS Coordinates:</Text>
      <Text>Latitude: {location.latitude || ''}</Text>
      <Text>Longitude: {location.longitude || ''}</Text>
      <Button
        onPress={getLocation}
        title="Get Location"
      />
    </View>
    <View>
      <Button
        onPress={getImage}
        title="Get Image"
      />
      <Image source={{ uri: image.uri }} style={{ width: 100, height: 100 }} />
    </View>
  </View>
)

HardwareContainer.propTypes = {
  image: PropTypes.object.isRequired,
  getImage: PropTypes.func.isRequired,
  getLocation: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  image: state.image,
  location: state.location,
})
const mapDispatchToProps = dispatch => bindActionCreators(Object.assign({}, imageActions, locationActions), dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(HardwareContainer)
