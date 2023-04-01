import { createSlice } from "@reduxjs/toolkit";

interface authInitialState {
  userInfo:
    | {
        uid: string;
        email: string;
        name: string;
      }
    | undefined;
}

const initialState: authInitialState = {
  userInfo: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload
    }
  },
});

export const { setUser } = authSlice.actions;
