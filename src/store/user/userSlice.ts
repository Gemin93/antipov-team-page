import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TUser } from "../../types/types";

interface UserState {
  user: TUser | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<TUser>) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
