import { createSlice } from "@reduxjs/toolkit";

export const empresaSlice = createSlice({
   name: "empresa",
   initialState: {
      empresa: [],
   },
   reducers: {
      onEmpresa: (state, { payload }) => {
         state.empresa = payload;
      },
   },
});

export const { onEmpresa } = empresaSlice.actions;
