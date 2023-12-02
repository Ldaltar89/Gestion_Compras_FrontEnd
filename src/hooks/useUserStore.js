import { useDispatch } from "react-redux";
import { gestionComprasApi } from "../api";
import {
   onCheckingUser,
   onClearCheckingUser,
   onDeleteUser,
   onGetUsers,
   onGetIdUsuario,
   onCheckingBottonUser,
   onClearCheckingBottonUser,
} from "../store";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export const useUserStore = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const startUser = async () => {
      dispatch(onCheckingUser());

      try {
         const { data } = await gestionComprasApi.get("/auth/users");
         dispatch(onGetUsers(data.usuario));
      } catch (error) {
         Swal.fire("Error al presentar usuarios", "", "error");
      }
      dispatch(onClearCheckingUser());
   };

   const startRegister = async (datos) => {
      dispatch(onCheckingBottonUser("checkingAdd"));
      try {
         await gestionComprasApi.post("/auth/new", datos);
         navigate("/usuario");
         Swal.fire("Registro Exitoso", "", "success");
      } catch (error) {
         const err = error.response.data.msg;
         Swal.fire(err, "", "error");
      }
      dispatch(onClearCheckingBottonUser());
   };

   const startGetIdUsuario = async (id) => {
      dispatch(onCheckingUser());
      try {
         const { data } = await gestionComprasApi.get(`/auth/user/${id}`);
         dispatch(onGetIdUsuario(data));
      } catch (error) {
         Swal.fire("Error al obtener usuario", "", "error");
      }
      dispatch(onClearCheckingUser());
   };

   const startPutUsuario = async (datos) => {
      dispatch(onCheckingBottonUser("checkingPut"));
      try {
         await gestionComprasApi.put(`/auth/user/${datos.id}`, datos);
         Swal.fire("Actualizado correctamente", "", "success");
         navigate("/usuario");
      } catch (error) {
         Swal.fire("Error al actualizar usuario", "", "error");
      }
      dispatch(onClearCheckingBottonUser());
   };

   const startDeleteUser = async (id) => {
      try {
         Swal.fire({
            title: "¿Estas seguro?",
            text: "¡No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "¡Sí, bórralo!",
         }).then(async (result) => {
            if (result.isConfirmed) {
               await gestionComprasApi.delete(`/auth/user/${id}`);
               dispatch(onDeleteUser(id));
               Swal.fire({
                  title: "¡Eliminado!",
                  text: "El usuario ha sido eliminado.",
                  icon: "success",
               });
            }
         });
      } catch (error) {
         console.log(error);
         Swal.fire("Error al eliminar usuarios", "", "error");
      }
   };

   return {
      startUser,
      startDeleteUser,
      startRegister,
      startGetIdUsuario,
      startPutUsuario,
   };
};
