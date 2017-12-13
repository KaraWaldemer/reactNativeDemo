import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  questionScrollWindow: {
    flex: 1,
    margin: 20,
  },
  questionWindow: {
    flex: 1,
    margin: 20,
  },
  picker: {
    borderColor: '#5b83c2',
    borderWidth: 1,
  },
  pickerItem: {
    color: '#5b83c2',
    height: 100,
  },
  label: {
    fontSize: 16,
  },
  questionWrapper: {
    marginBottom: 20,
  },
  sliderValues: {
    flexDirection: 'row',
  },
  minValue: {
    flex: 1,
    paddingLeft: 5,
    textAlign: 'left',
  },
  maxValue: {
    flex: 1,
    paddingRight: 5,
    textAlign: 'right',
  },
  switchStyle: {
    color: '#5b83c2',
  },
  textInputStyle: {
    borderColor: '#5b83c2',
    borderWidth: 1,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: '#5b83c2',
    borderColor: '#5b83c2',
    borderRadius: 5,
    borderWidth: 1,
    margin: 10,
    height: 36,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
})
