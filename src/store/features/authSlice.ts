import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFetching: true,
  authToken: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthSlice: (state, action) => {
      state.isFetching = false;
      state.authToken = action.payload.authToken;
      state.isAuthenticated = action.payload.isAuthenticated;
    },

    resetAuthSlice: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { setAuthSlice, resetAuthSlice } = authSlice.actions;
export default authSlice.reducer;
