import { useDispatch } from "react-redux";
import { gestionComprasApi } from "../api";
import { onCategoria } from "../store";

export const useCategoriaStore = () => {
   const dispatch = useDispatch();

   const startCategoria = async () => {
      try {
         const { data } = await gestionComprasApi.get("/categoria");
         dispatch(onCategoria(data.categoria));
      } catch (error) {
         console.log(error);
      }
   };
   return { startCategoria };
};
