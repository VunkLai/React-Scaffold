import { createSlice } from "@reduxjs/toolkit";
import { increment } from "../counter/counterSlice";
import { auth } from "./authApi";
interface User {
  username: string;
  email: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  access_token: string | null;
  refresh_token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  access_token: null,
  refresh_token: null,
};

interface Certificate {
  access_token: string;
  refresh_token: string;
}

interface Certification {
  id: number;
  username: string;
  email: string;
  certificate: Certificate;
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCertificates: (state, { payload }: { payload: Certification }) => {
      state.isAuthenticated = true;
      state.user = {
        username: payload.username,
        email: payload.email,
      };
      const { access_token, refresh_token } = payload.certificate;
      state.access_token = access_token;
      state.refresh_token = refresh_token;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(increment, (state, action) => {
      console.log("app extraReducers counter/increment", action);
      state.isAuthenticated = !state.isAuthenticated;
    });
    builder.addMatcher(auth.endpoints.login.matchPending, (state, action) => {
      // auth.endpoints.login.matchPending,
      // auth.endpoints.login.matchFulfilled,
      // auth.endpoints.login.matchRejected,
      console.log("---------------------------------------------------------");
      state.isAuthenticated = true;
    });
  },
});

export const { setCertificates } = authSlice.actions;

export default authSlice.reducer;
