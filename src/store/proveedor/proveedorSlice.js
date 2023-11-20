import { createSlice } from "@reduxjs/toolkit";

export const proveedorSlice = createSlice({
   name: "proveedor",
   initialState: {
      status: "Checking",
      proveedor: [],
   },
   reducers: {
      onCheckingProveedor: (state) => {
         state.status = "Checking";
      },
      onGetProveedor: (state, { payload }) => {
         state.status = "";
         state.proveedor = payload;
      },

      onDeleteProveedor: (state, { payload }) => {
         state.proveedor = state.proveedor.filter(
            (items) => items.id !== payload
         );
      },
      onClearCheckingProveedor: (state) => {
         state.status = "";
      },
   },
});

export const {
   onCheckingProveedor,
   onDeleteProveedor,
   onClearCheckingProveedor,
   onGetProveedor,
} = proveedorSlice.actions;
