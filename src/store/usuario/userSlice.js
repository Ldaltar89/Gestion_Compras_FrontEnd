import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
   name: "user",
   initialState: {
      users: [],
      status: "",
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
   },
});

export const { onGetUsers, onCheckingUser, onDeleteUser, onClearCheckingUser } =
   userSlice.actions;
