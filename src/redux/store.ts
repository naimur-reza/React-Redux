import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import logger from "./middlewares/Logger";

const reducer = {
  counter: counterSlice,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
