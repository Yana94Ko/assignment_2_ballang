import { createSlice } from "@reduxjs/toolkit";
import utils from "../../utils/utils";

const profileSlice = createSlice({
  initialState: {
    profile: {
      userId: null,
      nickname: null,
    },
  },
  name: "profileSlice",
  reducers: {
    setProfile(state, action) {
      state.userId = action.payload;
      state.nickname = utils.nickname.getRandomNickName();
    },
    updateNickname(state, action) {
      state.nickname = action.payload;
    },
    updateUserId(state, action) {
      state.userId = action.payload;
    },
  },
});

export const { setProfile, updateNickname } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
