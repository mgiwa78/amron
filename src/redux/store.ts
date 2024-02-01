import { ConfigureStoreOptions, configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import propertyReducer from "./slice/propertySlice";
import { api } from "@/services/api";
import logger from "redux-logger";

export const makeStore = (
  options?: ConfigureStoreOptions["preloadedState"] | undefined
) => {
  return configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      auth: authReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware, logger),
    ...options
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
