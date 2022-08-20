import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { getUserDataFromCookie } from "../../cookie/authCookie";
import UserInterface from "../interface/userInterface";

const initialState = (): UserInterface => {
  return getUserDataFromCookie();
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: initialState(),
  reducers: {
    setUserData: (state, action: PayloadAction<UserInterface>) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.isAdmin = action.payload.isAdmin;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
  },
});

export const { setUserData } = userInfoSlice.actions;

export default userInfoSlice.reducer;
