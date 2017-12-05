import * as types from '../types/location.types'

export function getLocation() {
  return {
    type: types.GET_LOCATION,
  }
}

export function setLocation( location ) {
  return {
    type: types.SET_LOCATION,
    location,
  }
}
