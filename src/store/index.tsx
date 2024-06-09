import { configureStore } from "@reduxjs/toolkit";
import dataService from "../services/DataService";
import errorService from "../services/ErrorService";

const store = configureStore({
  reducer: {
    data: dataService,
    error: errorService,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
