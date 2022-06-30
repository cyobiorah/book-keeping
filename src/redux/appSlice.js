import { createSlice } from "@reduxjs/toolkit";
import { genres } from "../data";

const initialState = {
  genres: genres,
  selectedGenre: {},
  selectedSubGenre: {},
};

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    addSelectedGenre(state, action) {
      state.selectedGenre = action.payload;
    },
    addSelectedSubGenre(state, action) {
      state.selectedSubGenre = action.payload;
    },
  },
});

export const { addSelectedGenre, addSelectedSubGenre } = appSlice.actions;

export default appSlice.reducer;
