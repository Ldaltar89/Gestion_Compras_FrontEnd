import { createSlice } from "@reduxjs/toolkit";

export const productoSlice = createSlice({
   name: "producto",
   initialState: {
      status: "",
      statusBotton: "",
      producto: [],
      viewProducto: {},
   },
   reducers: {
      onGetProducto: (state, { payload }) => {
         state.producto = payload;
         state.status = "";
      },
      onGetIdProducto(state, { payload }) {
         state.viewProducto = payload.producto;
      },
      onDeleteProducto: (state, { payload }) => {
         state.producto = state.producto.filter(
            (items) => items._id !== payload
         );
      },
      onCheckingProducto: (state) => {
         state.status = "Checking";
      },
      onClearCheckingProducto: (state) => {
         state.status = "";
      },
      onCheckingBottonProducto: (state, { payload }) => {
         state.statusBotton = payload;
      },
      onClearCheckingBottonProducto: (state) => {
         state.statusBotton = "";
      },
   },
});

export const {
   onCheckingProducto,
   onGetProducto,
   onDeleteProducto,
   onClearCheckingProducto,
   onGetIdProducto,
   onCheckingBottonProducto,
   onClearCheckingBottonProducto,
} = productoSlice.actions;
