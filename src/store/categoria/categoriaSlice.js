import { createSlice } from "@reduxjs/toolkit";

export const categoriaSlice = createSlice({
   name: "categoria",
   initialState: {
      categoria: [],
   },
   reducers: {
      onCategoria: (state, { payload }) => {
         state.categoria = payload;
      },
   },
});

export const { onCategoria } = categoriaSlice.actions;
