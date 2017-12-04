import {
  Button,
  Picker,
  View,
  Slider,
  Switch,
  Text,
  TextInput,
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'

const QuestionContainer = ({
  pickerAnswer,
}) => (
  <View>
    <Text>Answer my questions!</Text>
    <Picker
      onValueChange={( itemValue, itemIndex ) => true}
      selectedValue={pickerAnswer}
    >
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  </View>
)

QuestionContainer.propTypes = {
  pickerAnswer: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  pickerAnswer: state.pickerAnswer,
})

export default connect(mapStateToProps)(QuestionContainer)
