import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  email: string | null;
  token: string | null;
  id: string | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  email: null,
  token: null,
  id: null,
  isLoading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.isLoading = false;
      localStorage.setItem("authToken", action.payload.token!);
      localStorage.setItem("authEmail", action.payload.email!);
      localStorage.setItem("authId", action.payload.id!);
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      state.isLoading = false;
      localStorage.removeItem("authToken");
      localStorage.removeItem("authEmail");
      localStorage.removeItem("authId");
    },
    restoreUser(state) {
      state.email = localStorage.getItem("authEmail");
      state.token = localStorage.getItem("authToken");
      state.id = localStorage.getItem("authId");
      state.isLoading = false;
    },
  },
});

export const { setUser, removeUser, restoreUser } = authSlice.actions;

export default authSlice.reducer;
