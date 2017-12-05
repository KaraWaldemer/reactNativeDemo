import * as types from '../types/location.types'
import createReducer from './createReducer'

export const location = createReducer({}, {
  [types.SET_LOCATION]( state, action ) {
    return action.location
  },
})
