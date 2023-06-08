import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filteredContacts(_, action) {
      return action.payload;
    },
  },
});

export const { filteredContacts } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
