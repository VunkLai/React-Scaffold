import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
  isAuthenticated: boolean;
}

const initialState: AppState = {
  isAuthenticated: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: {
    "counter/increment": (state, action) => {
      console.log("app extraReducers counter/increment", action);
      state.isAuthenticated = !state.isAuthenticated;
      return state;
    },
  },
});

export const {} = appSlice.actions;

export default appSlice.reducer;
