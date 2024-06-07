import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../features/data-slice";
import errorSlice from "../features/error-slice";

const store = configureStore({
  reducer: {
    data: dataSlice,
    error: errorSlice
  }
});

export default store;


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;