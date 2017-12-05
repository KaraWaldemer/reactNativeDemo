import { GET_IMAGE } from '../types/image.types'
import { put as dispatch, takeEvery } from 'redux-saga/effects'
import { setImage } from '../action/image.action'
import ImagePicker from 'react-native-image-picker'

const getImageFromPicker = () => new Promise( ( resolve ) => {
  ImagePicker.showImagePicker({ storageOptions: { cameraRoll: true, waitUntilSaved: true } }, ( response ) => {
    resolve(response)
  })
})

export function* getImage() {
  try {
    const image = yield getImageFromPicker()
    yield dispatch(setImage({ image }))
  }catch( error ) {
    console.log(error)
  }
}

export function* getImageSaga() {
  yield takeEvery([GET_IMAGE], getImage)
}
