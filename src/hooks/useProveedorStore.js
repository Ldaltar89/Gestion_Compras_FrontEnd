import { useDispatch } from "react-redux";
import {
   onCheckingProveedor,
   onClearCheckingProveedor,
   onDeleteProveedor,
   onGetProveedor,
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

   const deleteProveedor = async (id) => {
      console.log(id);
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

      try {
      } catch (error) {
         console.log(error);
         Swal.fire("Error al eliminar proveedor", "", "error");
      }
   };

   const startRegisterProveedor = async ({
      nombres,
      apellidos,
      cedula,
      telefono,
      ciudad,
      direccion,
      correo,
      empresa,
   }) => {
      dispatch(onCheckingProveedor());

      try {
         const { data } = await gestionComprasApi.post("/proveedor", {
            nombres,
            apellidos,
            cedula,
            telefono,
            ciudad,
            direccion,
            correo,
            empresa,
         });
         Swal.fire("Registro Exitoso", "", "success");
         navigate("/proveedor");
      } catch (error) {
         const err =
            error.response.data?.msg ||
            Object.values(error.response.data.errors)[0].msg;
         Swal.fire(err, "", "error");
      }
      dispatch(onClearCheckingProveedor());
   };

   return { startProveedor, deleteProveedor, startRegisterProveedor };
};
