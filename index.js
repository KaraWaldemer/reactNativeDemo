import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import React from 'react'
import RootContainer from './js/root/root.container'
import createSagaMiddleware from 'redux-saga'
import mySaga from './js/saga'
import reducer from './js/root/root.reducer'

const loggerMiddleware = createLogger({})
const sagaMiddleware = createSagaMiddleware()

const configureStore = ( initialState ) => {
  const enhancer = compose(
    applyMiddleware( loggerMiddleware, sagaMiddleware ),
  )

  return createStore( reducer, initialState, enhancer )
}

const store = configureStore({})

sagaMiddleware.run(mySaga)

const App = () => (
  <Provider store={store}>
    <RootContainer />
  </Provider>
)

AppRegistry.registerComponent('reactNativeDemo', () => App)
