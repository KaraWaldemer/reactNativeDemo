import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import AppContainer from './js/container'
import React from 'react'
import createSagaMiddleware from 'redux-saga'
import mySaga from './js/saga'
import reducer from './js/reducer'

const loggerMiddleware = createLogger({})
const sagaMiddleware = createSagaMiddleware()

const configureStore = ( initialState ) => {
  const enhancer = compose(applyMiddleware( loggerMiddleware, sagaMiddleware ))

  return createStore( reducer, initialState, enhancer )
}

const store = configureStore({})

sagaMiddleware.run(mySaga)

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

AppRegistry.registerComponent('reactNativeDemo', () => App)
