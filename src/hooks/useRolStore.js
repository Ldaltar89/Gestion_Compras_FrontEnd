import { useDispatch, useSelector } from "react-redux";
import { gestionComprasApi } from "../api";
import { onRol } from "../store";

export const useRolStore = () => {
   const dispatch = useDispatch();
   const startRol = async () => {
      try {
         const { data } = await gestionComprasApi.get("/rol");
         dispatch(onRol(data.rol));
      } catch (error) {
         console.log(error);
      }
   };
   return {
      startRol,
   };
};
