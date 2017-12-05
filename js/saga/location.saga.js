import { GET_LOCATION } from '../types/location.types'
import { call, put as dispatch, takeEvery } from 'redux-saga/effects'
import { setLocation } from '../action/location.action'

export const getLocation = () => new Promise(( resolve ) => {
  navigator.geolocation.getCurrentPosition( ( response ) => {
    resolve(response)
  })
})

export function* retrieveLocation() {
  try{
    const position = yield call(getLocation )
    yield dispatch(setLocation( { ...position.coords, error: null }))
  }catch( error ) {
    console.log(error)
  }
}

export function* retrieveLocationSaga() {
  yield takeEvery([GET_LOCATION], retrieveLocation)
}
