import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import auth from "../../../utils/firebase.config";
const initialState = {
  name: "",
  email: "",
  isLoading: true,
  isError: false,
  error: "",
};

export const createUser = createAsyncThunk(
  "userSlice/createUser",
  async ({ email, password, name }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
    });
    console.log(data);

    return {
      email: data.user.email,
      name: data.user.displayName,
      img: data?.user?.photoURL,
    };
  }
);

export const loginUser = createAsyncThunk(
  "userSlice/loginUser",
  async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);

    return {
      email: data.user.email,
    };
  }
);

export const googleLogin = createAsyncThunk(
  "userSlice/googleLogin",
  async () => {
    const googleProvider = new GoogleAuthProvider();

    const data = signInWithPopup(auth, googleProvider);

    return {
      email: data.user.email,
    };
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.email = payload.email;
      state.name = payload.name;
    },
    toggleState: (state, { payload }) => {
      state.isLoading = payload;
    },
    logout: (state) => {
      state.name = "";
      state.email = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        (state.isLoading = true),
          (state.isError = false),
          (state.email = ""),
          (state.name = "");
        state.error = "";
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        (state.isLoading = false),
          (state.isError = false),
          (state.email = payload.email),
          (state.name = payload.name);
        state.error = "";
      })
      .addCase(createUser.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.email = ""),
          (state.name = "");
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        (state.isLoading = true),
          (state.isError = false),
          (state.email = ""),
          (state.name = "");
        state.error = "";
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        (state.isLoading = false),
          (state.isError = false),
          (state.email = payload.email),
          (state.name = payload.name);
        state.error = "";
      })
      .addCase(loginUser.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.email = ""),
          (state.name = "");
        state.error = action.error.message;
      })
      .addCase(googleLogin.pending, (state) => {
        (state.isLoading = true),
          (state.isError = false),
          (state.email = ""),
          (state.name = "");
        state.error = "";
      })
      .addCase(googleLogin.fulfilled, (state, { payload }) => {
        (state.isLoading = false),
          (state.isError = false),
          (state.email = payload.email),
          (state.name = payload.name);
        state.error = "";
      })
      .addCase(googleLogin.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.email = ""),
          (state.name = "");
        state.error = action.error.message;
      });
  },
});

export const { setUser, toggleState, logout } = userSlice.actions;

export default userSlice.reducer;
