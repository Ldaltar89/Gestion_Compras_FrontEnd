import { useDispatch } from "react-redux";
import { gestionComprasApi } from "../api";
import {
   onClearCheckingProducto,
   onGetProducto,
   onCheckingProducto,
   onDeleteProducto,
   onGetIdProducto,
   onCheckingBottonProducto,
   onClearCheckingBottonProducto,
} from "../store";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const useProductoStore = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const startProducto = async () => {
      dispatch(onCheckingProducto());
      try {
         const { data } = await gestionComprasApi.get("producto");
         dispatch(onGetProducto(data.producto));
      } catch (error) {
         Swal.fire("Error al presentar productos", "", "error");
      }
      dispatch(onClearCheckingProducto());
   };

   const startRegisterProducto = async (datos) => {
      dispatch(onCheckingBottonProducto("checkingAdd"));
      try {
         await gestionComprasApi.post("/producto", datos);
         Swal.fire("Registro Exitoso", "", "success");
         navigate("/producto");
      } catch (error) {
         console.log(error);
         const err =
            error.response.data?.msg ||
            Object.values(error.response.data.errors)[0].msg;
         Swal.fire(err, "", "error");
      }
      dispatch(onClearCheckingBottonProducto());
   };

   const startGetIdProducto = async (id) => {
      dispatch(onCheckingProducto());
      try {
         const { data } = await gestionComprasApi.get(`/producto/${id}`);
         dispatch(onGetIdProducto(data));
      } catch (error) {
         Swal.fire("Error al obtener producto", "", "error");
      }
      dispatch(onClearCheckingProducto());
   };

   const startPutProducto = async (datos) => {
      dispatch(onCheckingBottonProducto("checkingPut"));
      try {
         await gestionComprasApi.put(`/producto/${datos.id}`, datos);
         Swal.fire("Actualizado correctamente", "", "success");
         navigate("/producto");
      } catch (error) {
         Swal.fire("Error al actualizar proveedor", "", "error");
      }
      dispatch(onClearCheckingBottonProducto());
   };

   const startDeleteProducto = async (id) => {
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
               await gestionComprasApi.delete(`/producto/${id}`);
               dispatch(onDeleteProducto(id));
               Swal.fire({
                  title: "¡Eliminado!",
                  text: "El Producto ha sido eliminado.",
                  icon: "success",
               });
            }
         });
      } catch (error) {
         console.log(error);
         Swal.fire("Error al eliminar producto", "", "error");
      }
   };

   return {
      startProducto,
      startRegisterProducto,
      startGetIdProducto,
      startPutProducto,
      startDeleteProducto,
   };
};
