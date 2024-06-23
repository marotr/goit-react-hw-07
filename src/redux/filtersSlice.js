

import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: 'filter',
  initialState: { name: '' },
  reducers: {
    changeFilter: (state, {payload}) => {
      state.name = payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const selectNameFilter = (state) => state.filter.name;
export const filtersReducer = filterSlice.reducer;
