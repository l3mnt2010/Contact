import { configureStore } from "@reduxjs/toolkit";
//Importing the reducer from countSlice
import userReducer from "../redux/createReducer";

export const store = configureStore({
  reducer: {
    contact: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
