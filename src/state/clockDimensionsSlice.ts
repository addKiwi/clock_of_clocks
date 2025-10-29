import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { TYPES } from "../types";


interface ClockDimensionsState {
  type: TYPES;
  size: number;
}

const initialState: ClockDimensionsState = {
  type: TYPES.HORIZONTAL,
  size: 100,
}

export const clockDimensionsSlice = createSlice({
  name: "clockDimensions",
  initialState,
  reducers: {
    updateType: (state, action: PayloadAction<TYPES>) => {
      state.type = action.payload;
    },
    updateSize: (state, action: PayloadAction<number>) => {
      state.size = action.payload;
    },
  }
});

export const { updateType, updateSize } = clockDimensionsSlice.actions;
export default clockDimensionsSlice.reducer;
