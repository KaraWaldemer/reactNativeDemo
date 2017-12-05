import * as types from '../types/question.types'

export function setPickerAnswer( pickerAnswer ) {
  return {
    type: types.SET_PICKER_ANSWER,
    pickerAnswer,
  }
}

export function setSliderAnswer( sliderAnswer ) {
  return {
    type: types.SET_SLIDER_ANSWER,
    sliderAnswer,
  }
}

export function setSwitchAnswer( switchAnswer ) {
  return {
    type: types.SET_SWITCH_ANSWER,
    switchAnswer,
  }
}

export function setTextAnswer( textAnswer ) {
  return {
    type: types.SET_TEXT_ANSWER,
    textAnswer,
  }
}

export function setMultiTextAnswer( multiTextAnswer ) {
  return {
    type: types.SET_MULTI_TEXT_ANSWER,
    multiTextAnswer,
  }
}
