import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TUser } from "../../types/types";

interface UserState {
  users: TUser[];
}

const initialState: UserState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<TUser[]>) {
      state.users = action.payload;
    },
    addUsers(state, action: PayloadAction<TUser[]>) {
      state.users = [...state.users, ...action.payload];
    },
  },
});

export const { setUsers, addUsers } = usersSlice.actions;
export default usersSlice.reducer;
