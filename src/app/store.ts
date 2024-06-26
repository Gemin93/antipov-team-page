import { configureStore } from "@reduxjs/toolkit";
// import { persistStore } from "redux-persist";
import usersReducer from "../features/users/usersSlice";
import userReducer from "../features/user/userSlice";
import authSlice from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    user: userReducer,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
