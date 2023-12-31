import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/app/appSlice";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    counter: counterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
