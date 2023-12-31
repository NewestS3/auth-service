// authSaga.ts
import { takeLatest, put, call } from 'redux-saga/effects';
import { authSlice } from "../silces/auth.silce";
import { apiServices } from "../../services/api.services";
import { AxiosResponse } from "axios";
function* handleAuthRequest(action: any) {
  try {
    const response = apiServices.logInCall(action.payload);

    yield put(authSlice.actions.authSuccess(response));
  } catch (error) {
    yield put(authSlice.actions.authFailed(error));
  }
}

function* handleRegistrationRequest(action: any) {
  try {
    const data = action.payload;
    const body = {
      firstname: data.firstname,
      lastname: data.lastname,
      phoneNo: data.phoneNo,
      address: data.address,
      email: data.email,
      password: data.password,
    };
    const response: AxiosResponse = yield call(
      apiServices.registrationCall,
      body
    );
      if (response?.status === 200 || response?.status === 201)
        yield put(authSlice.actions.registrationSuccess(response));
  } catch (error) {
    yield put(authSlice.actions.registrationFailed(error));
  }
}

export function* watchAuthRequest() {
  
  yield takeLatest(authSlice.actions.authRequested.type, handleAuthRequest);
}

export function* watchRegistrationRequest(){

  yield takeLatest(
    authSlice.actions.registrationRequested.type,
    handleRegistrationRequest
  );
}
