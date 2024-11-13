import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "user",
  initialState: {
    showSearchgpt: false,
    searchMovies: null,
    searchText: null,
  },
  reducers: {
    toggleGptSeach: (state) => {
      state.showSearchgpt = !state.showSearchgpt;
    },
    addSearchMovies: (state, action) => {
      const { searchMovies, searchText } = action.payload;
      state.searchMovies = searchMovies;
      state.searchText = searchText;
    },
  },
});
export const { toggleGptSeach, addSearchMovies } = gptSlice.actions;
export default gptSlice.reducer;
