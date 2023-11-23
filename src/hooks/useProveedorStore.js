import { useDispatch } from "react-redux";
import {
   onCheckingProveedor,
   onClearCheckingProveedor,
   onDeleteProveedor,
   onGetProveedor,
   onGetIdProveedor,
   onCheckingBottonProveedor,
   onClearCheckingBottonProveedor,
} from "../store";
import { gestionComprasApi } from "../api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const useProveedorStore = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const startProveedor = async () => {
      dispatch(onCheckingProveedor());
      try {
         const { data } = await gestionComprasApi.get("/proveedor");
         dispatch(onGetProveedor(data.proveedor));
      } catch (error) {
         Swal.fire("Error al presentar proveedores", "", "error");
      }
      dispatch(onClearCheckingProveedor());
   };

   const startRegisterProveedor = async (datos) => {
      dispatch(onCheckingBottonProveedor("checkingAdd"));
      try {
         await gestionComprasApi.post("/proveedor", datos);
         Swal.fire("Registro Exitoso", "", "success");
         navigate("/proveedor");
      } catch (error) {
         const err =
            error.response.data?.msg ||
            Object.values(error.response.data.errors)[0].msg;
         Swal.fire(err, "", "error");
      }
      dispatch(onClearCheckingBottonProveedor());
   };

   const startGetIdProveedor = async (id) => {
      dispatch(onCheckingProveedor());
      try {
         const { data } = await gestionComprasApi.get(`/proveedor/${id}`);
         dispatch(onGetIdProveedor(data));
      } catch (error) {
         Swal.fire("Error al obtener proveedor", "", "error");
      }
      dispatch(onClearCheckingProveedor());
   };

   const startPutProveedor = async (datos) => {
      dispatch(onCheckingBottonProveedor("checkingPut"));
      try {
         await gestionComprasApi.put(`/proveedor/${datos.id}`, datos);
         Swal.fire("Actualizado correctamente", "", "success");
         navigate("/proveedor");
      } catch (error) {
         Swal.fire("Error al actualizar proveedor", "", "error");
      }
      dispatch(onClearCheckingBottonProveedor());
   };

   const startdDeleteProveedor = async (id) => {
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
               await gestionComprasApi.delete(`/proveedor/${id}`);
               dispatch(onDeleteProveedor(id));
               Swal.fire({
                  title: "¡Eliminado!",
                  text: "El Proveedor ha sido eliminado.",
                  icon: "success",
               });
            }
         });
      } catch (error) {
         Swal.fire("Error al eliminar proveedor", "", "error");
      }
   };

   return {
      startProveedor,
      startdDeleteProveedor,
      startRegisterProveedor,
      startGetIdProveedor,
      startPutProveedor,
   };
};
