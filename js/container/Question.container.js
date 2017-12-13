import * as questionActions from '../action/question.action'
import {
  Alert,
  Picker,
  ScrollView,
  Slider,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'
import styles from '../style/Question.style'

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
  <ScrollView
    keyboardShouldPersistTaps="never"
    style={styles.questionWindow}
  >
    <View style={styles.questionWrapper}>
      <Text style={styles.label}>Single Line Text:</Text>
      <TextInput
        onChangeText={setTextAnswer}
        style={styles.textInputStyle}
        value={textAnswer}
      />
    </View>
    <View style={styles.questionWrapper}>
      <Text style={styles.label}>Multi Line Text:</Text>
      <TextInput
        multiline
        numberOfLines={4}
        onChangeText={setMultiTextAnswer}
        style={styles.textInputStyle}
        value={multiTextAnswer}
      />
    </View>
    <View style={styles.questionWrapper}>
      <Text style={styles.label}>Picker:</Text>
      <View style={styles.picker}>
        <Picker
          itemStyle={styles.pickerItem}
          onValueChange={setPickerAnswer}
          selectedValue={pickerAnswer}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    </View>
    <View style={styles.questionWrapper}>
      <Text style={styles.label}>Slider:</Text>
      <Slider
        maximumValue={10}
        minimumValue={1}
        onValueChange={setSliderAnswer}
        step={1}
        value={sliderAnswer}
      />
      <View style={styles.sliderValues}>
        <Text style={styles.minValue}>1</Text>
        <Text style={styles.maxValue}>10</Text>
      </View>
    </View>
    <View style={styles.questionWrapper}>
      <Text style={styles.label}>Switch:</Text>
      <Switch
        onValueChange={setSwitchAnswer}
        tintColor="#5b83c2"
        value={switchAnswer}
      />
    </View>
    <TouchableOpacity
      onPress={() => Alert.alert('Answers Submitted')}
      style={styles.submitButton}
    >
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
  </ScrollView>
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
