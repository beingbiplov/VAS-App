import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getVasUsernameLS } from "../../utils/LocalStorageData";

export interface userInfoState {
  username: string | undefined;
}

const initialState = (): userInfoState => {
  let usernameLS = getVasUsernameLS();
  if (usernameLS) {
    return { username: usernameLS };
  } else {
    return { username: "" };
  }
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: initialState(),
  reducers: {
    setVasUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});

export const { setVasUsername } = userInfoSlice.actions;

export default userInfoSlice.reducer;
