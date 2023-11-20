import { createSlice } from "@reduxjs/toolkit";

export const productoSlice = createSlice({
   name: "producto",
   initialState: {
      status: "Checking",
      producto: [],
   },
   reducers: {
      onCheckingProducto: (state) => {
         state.status = "Checking";
      },
      onGetProducto: (state, { payload }) => {
         (state.status = ""), (state.producto = payload);
      },
      onDeleteProducto: (state, { payload }) => {
         state.producto = state.producto.filter(
            (items) => items._id !== payload
         );
      },
      onClearCheckingProducto: (state) => {
         state.status = "";
      },
   },
});

export const {
   onCheckingProducto,
   onGetProducto,
   onDeleteProducto,
   onClearCheckingProducto,
} = productoSlice.actions;
