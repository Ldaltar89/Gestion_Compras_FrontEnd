import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
   name: "user",
   initialState: {
      users: [],
      status: "",
      statusBotton: "",
      viewUsuario: {},
   },
   reducers: {
      onGetUsers: (state, { payload }) => {
         state.users = payload;
         state.status = "";
      },
      onCheckingUser: (state) => {
         state.status = "Checking";
      },
      onDeleteUser: (state, { payload }) => {
         state.users = state.users.filter((items) => items._id !== payload);
      },
      onClearCheckingUser: (state) => {
         state.status = "";
      },
      onGetIdUsuario: (state, { payload }) => {
         state.viewUsuario = payload.usuario;
      },
      onCheckingBottonUser: (state, { payload }) => {
         state.statusBotton = payload;
      },
      onClearCheckingBottonUser: (state) => {
         state.statusBotton = "";
      },
   },
});

export const {
   onGetUsers,
   onGetIdUsuario,
   onCheckingUser,
   onDeleteUser,
   onClearCheckingUser,
   onCheckingBottonUser,
   onClearCheckingBottonUser,
} = userSlice.actions;
