import { createSlice } from "@reduxjs/toolkit";

export const ciudadSlice = createSlice({
   name: "ciudad",
   initialState: {
      ciudad: [],
   },
   reducers: {
      onCiudad: (state, { payload }) => {
         state.ciudad = payload;
      },
   },
});

export const { onCiudad } = ciudadSlice.actions;
