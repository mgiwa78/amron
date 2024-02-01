import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import propertyReducer from "./slice/propertySlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      property: propertyReducer,
      auth: authReducer
    }
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
