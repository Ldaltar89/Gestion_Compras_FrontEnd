import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useProductoStore } from "../../../../hooks/useProductoStore";
import { useEffect } from "react";
import Spinner from "../../../../components/Spinner";
import ReactTable from "../../../../components/ReactTable";

const Tabla_Producto = () => {
   const { producto, status } = useSelector((state) => state.producto);

   const { startProducto, startDeleteProducto } = useProductoStore();

   useEffect(() => {
      startProducto();
   }, []);

   const columns = [
      {
         key: "producto",
         title: "Nombres",
         className:
            "top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell lg:table-cell whitespace-nowrap",
         classNameTbody:
            " px-3 py-2 text-sm text-gray-500 sm:table-cell text-center whitespace-nowrap",
      },
      {
         key: "proveedor",
         title: "Proveedor",
         className:
            "top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell lg:table-cell whitespace-nowrap",
         classNameTbody:
            " px-3 py-2 text-sm text-gray-500 sm:table-cell text-center whitespace-nowrap",
         render: (data) => (
            <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-700/10">
               {data.proveedor.nombres} {data.proveedor.apellidos}
            </span>
         ),
      },
      {
         key: "marca",
         title: "Marca",
         className:
            "top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell lg:table-cell whitespace-nowrap",
         classNameTbody:
            " px-3 py-2 text-sm text-gray-500 sm:table-cell text-center whitespace-nowrap",
         render: (data) => data.marca.nombre,
      },
      {
         key: "categoria",
         title: "Categoria",
         className:
            "top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell lg:table-cell whitespace-nowrap",
         classNameTbody:
            " px-3 py-2 text-sm text-gray-500 sm:table-cell text-center whitespace-nowrap",
         render: (data) => data.categoria.nombre,
      },
      {
         key: "precio",
         title: "Precio",
         className:
            "top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell lg:table-cell whitespace-nowrap",
         classNameTbody:
            " px-3 py-2 text-sm text-gray-500 sm:table-cell text-center whitespace-nowrap",
      },
      {
         key: "peso",
         title: "Peso",
         className:
            "top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell lg:table-cell whitespace-nowrap",
         classNameTbody:
            " px-3 py-2 text-sm text-gray-500 sm:table-cell text-center whitespace-nowrap",
      },
      {
         key: "unidad",
         title: "Unidad",
         className:
            "top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell lg:table-cell whitespace-nowrap",
         classNameTbody:
            " px-3 py-2 text-sm text-gray-500 sm:table-cell text-center whitespace-nowrap",
      },
      {
         key: "envase",
         title: "Envase",
         className:
            "top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell lg:table-cell whitespace-nowrap",
         classNameTbody:
            " px-3 py-2 text-sm text-gray-500 sm:table-cell text-center whitespace-nowrap",
      },
      {
         key: "fecha_elaboracion",
         title: "Elaborado",
         className:
            "top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell lg:table-cell whitespace-nowrap",
         classNameTbody:
            " px-3 py-2 text-sm text-gray-500 sm:table-cell text-center whitespace-nowrap",
         render: (data) => data.fecha_elaboracion.split("T")[0],
      },
      {
         key: "fecha_caducacion",
         title: "Caducidad",
         className:
            "top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell lg:table-cell whitespace-nowrap",
         classNameTbody:
            " px-3 py-2 text-sm text-gray-500 sm:table-cell text-center whitespace-nowrap",
         render: (data) => data.fecha_caducacion.split("T")[0],
      },
      {
         key: "stock",
         title: "Stock",
         className:
            "top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell lg:table-cell whitespace-nowrap",
         classNameTbody:
            " px-3 py-2 text-sm text-gray-500 sm:table-cell text-center whitespace-nowrap",
         render: (data) => (
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
               {data.stock}
            </span>
         ),
      },
   ];

   const handleBotton = () => {
      return (
         <Link
            to={"crear"}
            className="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
         >
            Añadir Producto
         </Link>
      );
   };

   const handleAccion = (items) => {
      return (
         <td className="whitespace-nowrap py-2 pl-3 pr-4 text-center text-sm font-medium sm:pr-8 lg:pr-8">
            <Link
               to={`editar/${items._id}`}
               className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
            >
               <RiEdit2Line className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            </Link>
            <button
               type="button"
               className="ml-2 inline-flex items-center gap-x-1.5 rounded-md bg-red-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
               onClick={() => handleDeleteProducto(items._id)}
            >
               <RiDeleteBin6Line
                  className="-ml-0.5 h-5 w-5"
                  aria-hidden="true"
               />
            </button>
         </td>
      );
   };

   const handleDeleteProducto = (id) => {
      startDeleteProducto(id);
   };

   if (status === "Checking") {
      return <Spinner />;
   }
   return (
      <ReactTable
         columns={columns}
         data={producto}
         handleBotton={handleBotton}
         handleAccion={handleAccion}
         initialLimit={10}
         title={"Productos"}
         Subtitle={"Listado de productos"}
      />
   );
};

export default Tabla_Producto;
