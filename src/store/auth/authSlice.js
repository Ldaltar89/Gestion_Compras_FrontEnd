import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
   name: "auth",
   initialState: {
      status: "Checking",
      user: {},
      errorMessage: undefined,
      statusButton: "",
      viewUsuario: {},
   },
   reducers: {
      onLogin: (state, { payload }) => {
         state.status = "authenticated";
         state.user = payload;
         state.errorMessage = undefined;
      },
      onLogout: (state, { payload }) => {
         state.status = "not-authenticated";
         state.user = {};
         state.errorMessage = payload;
      },
      clearErrorMessage: (state) => {
         state.errorMessage = undefined;
      },
      onChecking: (state) => {
         state.status = "checking";
      },
      onClearChecking: (state) => {
         state.status = "";
      },
      onCheckingButton(state) {
         state.statusButton = "checkingButton";
      },
      onClearCheckingButton(state) {
         state.statusButton = "";
      },
   },
});

export const {
   onChecking,
   onLogin,
   onLogout,
   clearErrorMessage,
   onClearChecking,
   onCheckingButton,
   onClearCheckingButton,
} = authSlice.actions;
