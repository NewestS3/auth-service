import { all } from 'redux-saga/effects';
import { watchAuthRequest, watchRegistrationRequest } from './auth.saga';
export default function* rootSaga() {
  yield all([
    // Add other sagas as needed
    watchAuthRequest(),
    watchRegistrationRequest()
  ]);
}