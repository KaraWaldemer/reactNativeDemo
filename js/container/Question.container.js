import * as questionActions from '../action/question.action'
import {
  Alert,
  Button,
  Picker,
  Slider,
  Switch,
  TextInput,
  View,
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'

const QuestionContainer = ({
  multiTextAnswer,
  pickerAnswer,
  sliderAnswer,
  switchAnswer,
  textAnswer,
  setMultiTextAnswer,
  setPickerAnswer,
  setSliderAnswer,
  setSwitchAnswer,
  setTextAnswer,
}) => (
  <View>
    <Picker
      onValueChange={setPickerAnswer}
      selectedValue={pickerAnswer}
    >
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
    <Slider
      maximumValue={10}
      minimumValue={1}
      onValueChange={setSliderAnswer}
      step={1}
      value={sliderAnswer}
    />
    <Switch
      onValueChange={setSwitchAnswer}
      value={switchAnswer}
    />
    <TextInput
      onChangeText={setTextAnswer}
      value={textAnswer}
    />
    <TextInput
      multiline
      numberOfLines={4}
      onChangeText={setMultiTextAnswer}
      value={multiTextAnswer}
    />
    <Button
      onPress={() => Alert.alert('Answers Submitted')}
      title="Submit"
    />
  </View>
)

QuestionContainer.propTypes = {
  multiTextAnswer: PropTypes.string.isRequired,
  setMultiTextAnswer: PropTypes.func.isRequired,
  pickerAnswer: PropTypes.string.isRequired,
  setPickerAnswer: PropTypes.func.isRequired,
  sliderAnswer: PropTypes.number.isRequired,
  setSliderAnswer: PropTypes.func.isRequired,
  switchAnswer: PropTypes.bool.isRequired,
  setSwitchAnswer: PropTypes.func.isRequired,
  textAnswer: PropTypes.string.isRequired,
  setTextAnswer: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  pickerAnswer: state.pickerAnswer,
  sliderAnswer: state.sliderAnswer,
  switchAnswer: state.switchAnswer,
  textAnswer: state.textAnswer,
  multiTextAnswer: state.multiTextAnswer,
})
const mapDispatchToProps = dispatch => bindActionCreators(questionActions, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer)
