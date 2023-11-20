import { useDispatch } from "react-redux";
import { gestionComprasApi } from "../api";
import { onEmpresa } from "../store";

export const useEmpresaStore = () => {
   const dispatch = useDispatch();

   const startEmpresa = async () => {
      try {
         const { data } = await gestionComprasApi.get("/empresa");
         dispatch(onEmpresa(data.empresa));
      } catch (error) {
         console.log(error);
      }
   };

   return {
      startEmpresa,
   };
};
