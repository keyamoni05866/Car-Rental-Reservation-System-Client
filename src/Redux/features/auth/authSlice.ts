import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../../../Types";
import { RootState } from "../../store";

type TAuthSlice = {
  user: null | TUser;
  token: null | object;
};

const initialState: TAuthSlice = {
  user: null,
  token: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    signUser: (state, action) => {
      const { userInfo, token } = action.payload;
      state.user = userInfo;
      state.token = token;
    },
    logOutUser: (state) => {
      state.token = null;
      state.user = null;
    },
    updateUserProfile: (state, action) => {
      const { updatedUserInfo } = action.payload;

      state.user = { ...state.user, ...updatedUserInfo };
    },
  },
});
export const { signUser, logOutUser, updateUserProfile } = authSlice.actions;
export default authSlice.reducer;
export const currentToken = (state: RootState) => state.auth.token;
export const currentUser = (state: RootState) => state.auth.user;
