import { useDispatch } from "react-redux";
import { gestionComprasApi } from "../api";
import {
   onClearCheckingProducto,
   onGetProducto,
   onCheckingProducto,
   onDeleteProducto,
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

   const deleteProducto = async (id) => {
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

      try {
      } catch (error) {
         console.log(error);
         Swal.fire("Error al eliminar producto", "", "error");
      }
   };

   const startRegisterProducto = async (datos) => {
      try {
         const {} = await gestionComprasApi.post("/producto", datos);
         Swal.fire("Registro Exitoso", "", "success");
         navigate("/productos");
      } catch (error) {
         console.log(error);
         const err =
            error.response.data?.msg ||
            Object.values(error.response.data.errors)[0].msg;
         Swal.fire(err, "", "error");
      }
   };

   return { startProducto, startRegisterProducto, deleteProducto };
};
