import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  initialState: 0,
  name: "counter",
  reducers: {
    increament: (state) => state + 1,
    decreament: (state) => state - 1,
  },
});

export const { decreament, increament } = counterSlice.actions;
export default counterSlice.reducer;
