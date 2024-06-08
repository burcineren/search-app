import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../Features/DataSlice";
import errorSlice from "../Features/ErrorSlice";

const store = configureStore({
  reducer: {
    data: dataSlice,
    error: errorSlice
  }
});

export default store;


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;