import * as types from '../types/question.types'
import createReducer from './createReducer'

export const pickerAnswer = createReducer('', {
  [types.SET_PICKER_ANSWER]( state, action ) {
    return action.pickerAnswer
  },
})

export const sliderAnswer = createReducer(0, {
  [types.SET_SLIDER_ANSWER]( state, action ) {
    return action.sliderAnswer
  },
})

export const switchAnswer = createReducer(false, {
  [types.SET_SWITCH_ANSWER]( state, action ) {
    return action.switchAnswer
  },
})

export const textAnswer = createReducer('', {
  [types.SET_TEXT_ANSWER]( state, action ) {
    return action.textAnswer
  },
})

export const multiTextAnswer = createReducer('', {
  [types.SET_MULTI_TEXT_ANSWER]( state, action ) {
    return action.multiTextAnswer
  },
})
