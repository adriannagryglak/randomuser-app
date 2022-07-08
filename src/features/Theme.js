import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLight: true };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updateTheme: (state, action) => {
      state.isLight = action.payload;
      localStorage.setItem("isThemeLight", JSON.stringify(state.isLight));
    },
    getTheme: (state) => {
      if (localStorage.getItem("isThemeLight")) {
        state.isLight = JSON.parse(localStorage.getItem("isThemeLight"));
      } else {
        state.isLight = window.matchMedia("(prefers-color-scheme: light)").matches;
      }
    },
  },
});

export const { updateTheme, getTheme } = themeSlice.actions;
export default themeSlice.reducer;
export const themeSelector = (state) => state.theme.isLight;
