import { fork } from 'redux-saga/effects'
import { getImageSaga } from './image.saga'
import { retrieveLocationSaga } from './location.saga'

export default function* main() {
  yield fork(getImageSaga)
  yield fork(retrieveLocationSaga)
}
