import { configureStore } from "@reduxjs/toolkit";
import { resualtSlice } from "./resualtSlice";

export const store = configureStore({
  reducer: {
    total: resualtSlice.reducer,
  },
});
