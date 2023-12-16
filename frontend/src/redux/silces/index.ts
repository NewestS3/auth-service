import { authReducer } from "./auth.silce";
import { IAuthState } from "../redux.constants";
import { combineReducers } from "@reduxjs/toolkit";
export type RootState={
    auth :IAuthState
}

export const rootReducer = combineReducers({
    auth: authReducer,
   
  });