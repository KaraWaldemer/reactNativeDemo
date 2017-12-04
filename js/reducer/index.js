import * as NavReducer from './nav.reducer'
import * as QuestionReducer from './question.reducer'
import { combineReducers } from 'redux'

export default combineReducers(Object.assign(NavReducer, QuestionReducer))
