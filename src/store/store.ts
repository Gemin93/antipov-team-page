import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/usersSlice";
import userReducer from "./user/userSlice";
import authReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    user: userReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
