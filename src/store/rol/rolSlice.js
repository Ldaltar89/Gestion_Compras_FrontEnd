import { createSlice } from "@reduxjs/toolkit";

export const rolSlice = createSlice({
   name: "rol",
   initialState: {
      rol: [],
   },
   reducers: {
      onRol: (state, { payload }) => {
         state.rol = payload;
      },
   },
});

export const { onRol } = rolSlice.actions;
