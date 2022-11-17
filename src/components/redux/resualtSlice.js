import { createSlice } from "@reduxjs/toolkit";

export const resualtSlice = createSlice({
  name: "resualts",
  initialState: {
    value: "",
    resualt: "",
    reset: "",
    history: [],
  },
  reducers: {
    showValue: (state, action) => {
      state.value = state.value + action.payload;
      return state;
    },
    total: (state, action) => {
      state.resualt = action.payload;
    },
    resetCa: (state, action) => {
      state.value = "";
      state.resualt = "";
    },
    history: (state, action) => {
      state.history.push(action.payload);
    },
  },
});
