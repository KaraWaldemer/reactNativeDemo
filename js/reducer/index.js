import * as NavReducer from './nav.reducer'
import { combineReducers } from 'redux'

// export const info = createReducer('', {
//   ['SET_INFO']( state, action ) {
//     return action.info
//   }
// })

export default combineReducers(Object.assign(NavReducer))
