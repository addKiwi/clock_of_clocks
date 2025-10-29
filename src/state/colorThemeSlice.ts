import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Color, ColorTheme } from "../types";

const initialState: ColorTheme = {
  hand: "#000000",
  watchBorder: "#808080",
  background: "#ffffff",
  clockBackground: "rgba(0,0,0,0)",
};

export const colorThemeSlice = createSlice({
  name: "colorTheme",
  initialState,
  reducers: {
    updateHand: (state, action: PayloadAction<Color>) => {
      state.hand = action.payload;
    },
    updateWatchBorder: (state, action: PayloadAction<Color>) => {
      state.watchBorder = action.payload;
    },
    updateBackground: (state, action: PayloadAction<Color>) => {
      state.background = action.payload;
    },
    updateClockBackground: (state, action: PayloadAction<Color>) => {
      state.clockBackground = action.payload;
    },
  },
});

export const {
  updateBackground,
  updateClockBackground,
  updateHand,
  updateWatchBorder,
} = colorThemeSlice.actions;
export default colorThemeSlice.reducer;
