import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { User } from "../types";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null | undefined;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData: Omit<User, "id">, { rejectWithValue }) => {
    try {
      const checkUserRes = await axios.get(
        `http://localhost:3001/users?email=${userData.email}`
      );
      if (checkUserRes.data.length > 0) {
        return rejectWithValue("An account alredy exist with this email.");
      }
      const response = await axios.post(
        "http://localhost:3001/users",
        userData
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (loginData: Pick<User, "email" | "password">, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/users?email=${loginData.email}&password=${loginData.password}`
      );
      if (response.data.length > 0) {
        const user = response.data[0];
        localStorage.setItem("user", JSON.stringify(user));
        return user;
      } else {
        return rejectWithValue("Invalid email or password.");
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
    },
    checkAuth: (state) => {
      const user = localStorage.getItem("user");
      if (user) {
        state.isAuthenticated = true;
        state.user = JSON.parse(user);
      }
    },
  },
  extraReducers: (builder) => {
    builder
       //register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, checkAuth } = authSlice.actions;
export default authSlice.reducer;
