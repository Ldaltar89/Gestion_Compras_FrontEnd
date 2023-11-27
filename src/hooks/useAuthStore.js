import { useDispatch, useSelector } from "react-redux";
import { gestionComprasApi } from "../api";
import {
   clearErrorMessage,
   onCheckingButton,
   onClearCheckingButton,
   onLogin,
   onLogout,
} from "../store";

export const useAuthStore = () => {
   const { status, user, errorMessage } = useSelector((state) => state.auth);
   const dispatch = useDispatch();

   const startLogin = async (datos) => {
      dispatch(onCheckingButton());
      try {
         const { data } = await gestionComprasApi.post("/auth", datos);
         localStorage.setItem("token", data.token);
         localStorage.setItem("token-init-date", new Date().getTime());
         dispatch(onLogin({ name: data.name, uid: data.uid, rol: data.rol }));
      } catch (error) {
         dispatch(onLogout("Credenciales incorrectas"));
         setTimeout(() => {
            dispatch(clearErrorMessage());
         }, 10);
      }
      dispatch(onClearCheckingButton());
   };

   const checkAuthToken = async () => {
      const token = localStorage.getItem("token");
      if (!token) return dispatch(onLogout());
      try {
         const { data } = await gestionComprasApi.get("/auth/renew");
         localStorage.setItem("token", data.token);
         localStorage.setItem("token-init-date", new Date().getTime());
         dispatch(onLogin({ name: data.name, uid: data.uid, rol: data.rol }));
      } catch (error) {
         localStorage.clear();
         dispatch(onLogout());
      }
   };

   const startLogout = () => {
      localStorage.clear();
      dispatch(onLogout());
   };

   return {
      //*propiedades
      status,
      user,
      errorMessage,
      //*metodos
      checkAuthToken,
      startLogin,
      startLogout,
   };
};
