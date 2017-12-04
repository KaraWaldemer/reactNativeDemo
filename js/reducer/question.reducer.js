import * as types from '../types/question.types'
import createReducer from './createReducer'

export const pickerAnswer = createReducer('', {
  [types.SET_PICKER_ANSWER]( state, action ) {
    return action.pickerAnswer
  },
})
