import { configureStore } from "@reduxjs/toolkit";
import colorThemeSlice from "./colorThemeSlice";
import clockDimensionsSlice from "./clockDimensionsSlice";

export const store = configureStore({
  reducer: {
    colorTheme: colorThemeSlice,
    clockDimensions: clockDimensionsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
