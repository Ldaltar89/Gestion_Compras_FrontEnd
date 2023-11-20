import { configureStore } from "@reduxjs/toolkit";
import {
   authSlice,
   categoriaSlice,
   ciudadSlice,
   empresaSlice,
   marcaSlice,
   productoSlice,
   proveedorSlice,
   rolSlice,
} from "./";
import { userSlice } from "./usuario/userSlice";

export const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      rol: rolSlice.reducer,
      user: userSlice.reducer,
      proveedor: proveedorSlice.reducer,
      ciudad: ciudadSlice.reducer,
      empresa: empresaSlice.reducer,
      producto: productoSlice.reducer,
      categoria: categoriaSlice.reducer,
      marca: marcaSlice.reducer,
   },
});
