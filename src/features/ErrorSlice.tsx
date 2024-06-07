import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  visibility: false,
};

const errorReducer = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError(state, action) {
      state.message = action.payload.message;
      state.visibility = action.payload.visibility;
    },
  },
});

export const { setError } = errorReducer.actions;
export default errorReducer.reducer;
