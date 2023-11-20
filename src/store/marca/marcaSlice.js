import { createSlice } from "@reduxjs/toolkit";

export const marcaSlice = createSlice({
   name: "marca",
   initialState: {
      marca: [],
   },
   reducers: {
      onMarca: (state, { payload }) => {
         state.marca = payload;
      },
   },
});

export const { onMarca } = marcaSlice.actions;
