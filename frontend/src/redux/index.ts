// store.js
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from "@redux-saga/core";
import { rootReducer } from './silces';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootSaga from './saga/rootsaga';
import logger from "redux-logger";
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware, logger],
  // other options e.g middleware, go here
});

 sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

