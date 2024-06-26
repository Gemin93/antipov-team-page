import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
