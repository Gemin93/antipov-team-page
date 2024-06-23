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
  },
});

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;
