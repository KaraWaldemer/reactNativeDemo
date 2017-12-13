import * as imageActions from '../action/image.action'
import * as locationActions from '../action/location.action'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'
import styles from '../style/Hardware.style'

const HardwareContainer = ({
  image,
  getImage,
  getLocation,
  location,
}) => (
  <View style={styles.hardwareWindow}>
    <View style={styles.gpsView}>
      <Text style={styles.labelStyle}>GPS Coordinates:</Text>
      <Text style={styles.contentStyle}>Latitude: {location.latitude || ''}</Text>
      <Text style={styles.contentStyle}>Longitude: {location.longitude || ''}</Text>
      <TouchableOpacity
        onPress={getLocation}
        style={styles.buttonStyle}
      >
        <Text style={styles.buttonText}>Get Location</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.imageView}>
      <Image source={{ uri: image.uri }} style={styles.imageStyle} />
      <TouchableOpacity
        onPress={getImage}
        style={styles.buttonStyle}
      >
        <Text style={styles.buttonText}>Get Image</Text>
      </TouchableOpacity>
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
