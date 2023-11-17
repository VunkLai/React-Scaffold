import {
  Action,
  Dispatch,
  MiddlewareAPI,
  configureStore,
} from "@reduxjs/toolkit";
import appReducer from "../features/app/appSlice";
import counterReducer from "../features/counter/counterSlice";

const middlewares = [
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
    app: appReducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
  devTools: false,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
