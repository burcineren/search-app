import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  data: any[];
  searchData: any[] | null;
}

const initialState: DataState = {
  data: [],
  searchData: null,
};

const dataService = createSlice({
  name: "data",
  initialState,
  reducers: {
    bindData(state, action: PayloadAction<any[]>) {
      state.data = [...action.payload];
    },
    searchByFilter(state, action: PayloadAction<string | null>) {
      if (action.payload !== null) {
        const filteredData = state.data.filter(
          (item) =>
            item["nameSurname"] &&
            item["nameSurname"].includes(action.payload!.trim())
        );
        state.searchData = [...filteredData];
      } else {
        state.searchData = null;
      }
    },
    sortedFilteredData(state, action: PayloadAction<any[]>) {
      state.searchData = [...action.payload];
    },
  },
});

export const { bindData, searchByFilter, sortedFilteredData } =
dataService.actions;

export default dataService.reducer;
