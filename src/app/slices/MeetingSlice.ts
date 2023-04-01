import { createSlice } from "@reduxjs/toolkit";
import { ToastType } from "../../lib/Types";

interface meetingInitialState {
  toasts: Array<ToastType>;
}

const initialState: meetingInitialState = {
  toasts: [],
};

export const meetingsSlice = createSlice({
  name: "meetings",
  initialState,
  reducers: {
    setToasts: (state, action) => {
      state.toasts = action.payload;
    },
  },
});

export const { setToasts } = meetingsSlice.actions;