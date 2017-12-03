import { combineReducers } from 'redux'
import createReducer from '../helpers/createReducer'

export const info = createReducer('', {
  ['SET_INFO']( state, action ) {
    return action.info
  }
})

export default combineReducers(Object.assign({info}))
