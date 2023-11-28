/* eslint-disable react-hooks/exhaustive-deps */
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useProveedorStore } from "../../../../hooks/useProveedorStore";
import { useEffect } from "react";
import Spinner from "../../../../components/Spinner";
import ReactTable from "../../../../components/ReactTable";

const Tabla_Proveedor = () => {
   const { proveedor, status } = useSelector((state) => state.proveedor);

   const { startProveedor, startdDeleteProveedor } = useProveedorStore();

   useEffect(() => {
      startProveedor();
   }, []);

   const columns = [
      {
         key: "nombres",
         title: "Nombres",
         className:
            "top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell lg:table-cell whitespace-nowrap",
         classNameTbody:
            " px-3 py-2 text-sm text-gray-500 sm:table-cell text-center whitespace-nowrap",
      },
      {
         key: "apellidos",
         title: "Apellidos",
         className:
            "top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell lg:table-cell whitespace-nowrap",
         classNameTbody:
            " px-3 py-2 text-sm text-gray-500 sm:table-cell text-center whitespace-nowrap",
      },
      {
         key: "correo",
         title: "Correo",
         className:
            "top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell lg:table-cell whitespace-nowrap",
         classNameTbody:
            " px-3 py-2 text-sm text-gray-500 sm:table-cell text-center whitespace-nowrap",
      },
      {
         key: "telefono",
         title: "Telefono",
         className:
            "top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell lg:table-cell whitespace-nowrap",
         classNameTbody:
            " px-3 py-2 text-sm text-gray-500 sm:table-cell text-center whitespace-nowrap",
      },
      {
         key: "ciudad.nombre",
         title: "Ciudad",
         className:
            "top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell lg:table-cell whitespace-nowrap",
         classNameTbody:
            " px-3 py-2 text-sm text-gray-500 sm:table-cell text-center whitespace-nowrap",
         render: (data) => data.ciudad.nombre,
      },
      {
         key: "empresa",
         title: "Empresa",
         className:
            "top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell lg:table-cell whitespace-nowrap",
         classNameTbody:
            " px-3 py-2 text-sm text-gray-500 sm:table-cell text-center whitespace-nowrap",
         render: (data) => data.empresa.nombre,
      },
   ];

   const handleBotton = () => {
      return (
         <Link
            to={"crear"}
            className="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
         >
            Añadir Proveedor
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
               onClick={() => handleDeleteProveedor(items._id)}
            >
               <RiDeleteBin6Line
                  className="-ml-0.5 h-5 w-5"
                  aria-hidden="true"
               />
            </button>
         </td>
      );
   };

   const handleDeleteProveedor = (id) => {
      startdDeleteProveedor(id);
   };

   if (status === "Checking") {
      return <Spinner />;
   }

   return (
      <ReactTable
         columns={columns}
         data={proveedor}
         handleBotton={handleBotton}
         handleAccion={handleAccion}
         initialLimit={10}
         title={"Proveedores"}
         Subtitle={"Listado de proveedor"}
      />
   );
};

export default Tabla_Proveedor;
