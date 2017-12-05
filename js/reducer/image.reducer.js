import * as types from '../types/image.types'
import createReducer from './createReducer'

export const image = createReducer({}, {
  [types.SET_IMAGE]( state, action ) {
    return action.image
  },
})
