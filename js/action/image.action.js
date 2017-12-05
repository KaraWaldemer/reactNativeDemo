import * as types from '../types/image.types'

export function setImage({ image }) {
  return {
    type: types.SET_IMAGE,
    image,
  }
}

export function getImage() {
  return {
    type: types.GET_IMAGE,
  }
}
