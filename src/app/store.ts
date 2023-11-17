import {
  Action,
  Dispatch,
  MiddlewareAPI,
  configureStore,
} from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import counterReducer from "../features/counter/counterSlice";
import api from "./api";

const middlewares = [
  api.middleware,
  (store: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
    console.log("Dispatching", JSON.stringify(action));
    console.log("Current State", JSON.stringify(store.getState()));
    const result = next(action);
    console.log("Next State", JSON.stringify(store.getState()));
    return result;
  },
];

export const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
  devTools: false,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
