import { createSlice } from "@reduxjs/toolkit";

export const proveedorSlice = createSlice({
   name: "proveedor",
   initialState: {
      status: "",
      statusBotton: "",
      proveedor: [],
      viewProveedor: {},
   },
   reducers: {
      onGetProveedor: (state, { payload }) => {
         state.status = "";
         state.proveedor = payload;
      },

      onGetIdProveedor(state, { payload }) {
         state.viewProveedor = payload.proveedor;
      },
      onDeleteProveedor: (state, { payload }) => {
         console.log(payload);
         state.proveedor = state.proveedor.filter(
            (items) => items._id !== payload
         );
      },
      onCheckingProveedor: (state) => {
         state.status = "Checking";
      },
      onClearCheckingProveedor: (state) => {
         state.status = "";
      },
      onCheckingBottonProveedor: (state, { payload }) => {
         state.statusBotton = payload;
      },
      onClearCheckingBottonProveedor: (state) => {
         state.statusBotton = "";
      },
   },
});

export const {
   onCheckingProveedor,
   onDeleteProveedor,
   onClearCheckingProveedor,
   onGetProveedor,
   onGetIdProveedor,
   onCheckingBottonProveedor,
   onClearCheckingBottonProveedor,
} = proveedorSlice.actions;
