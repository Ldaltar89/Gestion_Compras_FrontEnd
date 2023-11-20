import { useDispatch } from "react-redux";
import { gestionComprasApi } from "../api";
import { onCiudad } from "../store";

export const useCiudadStore = () => {
   const dispatch = useDispatch();

   const startCiudad = async () => {
      try {
         const { data } = await gestionComprasApi.get("/ciudad");
         dispatch(onCiudad(data.ciudad));
      } catch (error) {
         console.log(error);
      }
   };

   return { startCiudad };
};
