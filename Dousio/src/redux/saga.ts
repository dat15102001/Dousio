import { fork, all } from 'redux-saga/effects'

export default function* sagas() {
  yield all([].map(fork))
}
// export default sagas
