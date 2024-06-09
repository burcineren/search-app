import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  visibility: false,
};

const errorService = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError(state, action) {
      state.message = action.payload.message;
      state.visibility = action.payload.visibility;
    },
  },
});

export const { setError } = errorService.actions;
export default errorService.reducer;
