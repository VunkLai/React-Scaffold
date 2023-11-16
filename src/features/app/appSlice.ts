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
});

export const {} = appSlice.actions;

export default appSlice.reducer;
