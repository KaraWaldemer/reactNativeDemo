import * as ImageReducer from './image.reducer'
import * as LocationReducer from './location.reducer'
import * as NavReducer from './nav.reducer'
import * as QuestionReducer from './question.reducer'
import { combineReducers } from 'redux'

export default combineReducers(Object.assign(ImageReducer, LocationReducer, NavReducer, QuestionReducer))
