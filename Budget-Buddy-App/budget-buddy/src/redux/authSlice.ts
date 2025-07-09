import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  updateProfile, 
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import type { User, AuthPayload } from "../types";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null | undefined;
  isAuthInitialized: boolean;
}

const mapFirebaseUser = (firebaseUser: any): User => {
  return {
    id: firebaseUser.uid,
    fullName: firebaseUser.displayName || "User",
    email: firebaseUser.email || "",
  };
};

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  isAuthInitialized: false,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData: AuthPayload, { rejectWithValue }) => {
    const { email, password, fullName } = userData;
    try {
       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: fullName });
      return mapFirebaseUser(userCredential.user);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (loginData: Pick<User, "email" | "password">, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginData.email, loginData.password!);
      return mapFirebaseUser(userCredential.user);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser", 
  async (_, { rejectWithValue }) => {
    try {
        await signOut(auth);
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
});


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthUser: (state, action: PayloadAction<User | null>) => {
        if (action.payload) {
            state.user = action.payload;
            state.isAuthenticated = true;
        } else {
            state.user = null;
            state.isAuthenticated = false;
        }
        state.loading = false;
        state.isAuthInitialized = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
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
      })
      // Logout
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.loading = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setAuthUser, logout } = authSlice.actions;
export default authSlice.reducer;
