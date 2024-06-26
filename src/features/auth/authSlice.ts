import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  status: "idle" | "loading" | "failed";
}

const initialState: AuthState = {
  token: null,
  status: "idle",
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData: { email: string; password: string }) => {
    const response = await fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Ошибка регистрации");
    }
    return data.token;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.token = action.payload;
        localStorage.setItem("token", action.payload);
      })
      .addCase(registerUser.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
