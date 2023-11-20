import { useDispatch } from "react-redux";
import { gestionComprasApi } from "../api";
import { onMarca } from "../store";

export const useMarcaStore = () => {
   const dispatch = useDispatch();

   const startMarca = async () => {
      try {
         const { data } = await gestionComprasApi.get("/marca");
         dispatch(onMarca(data.marca));
      } catch (error) {
         console.log(error);
      }
   };

   return { startMarca };
};
