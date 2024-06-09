import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../features/DataSlice";
import errorSlice from "../features/ErrorSlice";

const store = configureStore({
  reducer: {
    data: dataSlice,
    error: errorSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
