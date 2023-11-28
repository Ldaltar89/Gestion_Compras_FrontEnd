import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useUserStore } from "../../../../hooks/useUserStore";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Spinner from "../../../../components/Spinner";
import ReactTable from "../../../../components/ReactTable";

const Tabla_Usuario = () => {
   const { users, status } = useSelector((state) => state.user);
   const { startUser, startDeleteUser } = useUserStore();

   useEffect(() => {
      startUser();
   }, []);

   const columns = [
      {
         key: "name",
         title: "Nombre de usuario",
         className:
            "top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell lg:table-cell whitespace-nowrap",
         classNameTbody:
            " px-3 py-2 text-sm text-gray-500 sm:table-cell text-center whitespace-nowrap",
      },
      {
         key: "email",
         title: "Email",
         className:
            "top-0 z-10  border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell lg:table-cell",
         classNameTbody:
            " px-3 py-2 text-sm text-gray-500 sm:table-cell text-center",
      },
      {
         key: "rol",
         title: "Rol",
         className:
            "top-0 z-10  border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell lg:table-cell",
         classNameTbody:
            " px-3 py-2 text-sm text-gray-500 sm:table-cell text-center",
         render: (data) =>
            data.rol.nombre === "Administrador" ? (
               <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-500 ring-1 ring-inset ring-green-600/20">
                  {data.rol.nombre}
               </span>
            ) : (
               <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">
                  {data.rol.nombre}
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
            Añadir Usuario
         </Link>
      );
   };

   const handleAccion = (items) => {
      return (
         <td className="py-2 pl-3 pr-4 text-center text-sm font-medium sm:pr-8 lg:pr-8">
            <button
               type="button"
               className="inline-flex items-center gap-x-1.5 rounded-md bg-red-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
               onClick={() => handleDelete(items._id)}
            >
               <RiDeleteBin6Line
                  className="-ml-0.5 h-5 w-5"
                  aria-hidden="true"
               />
            </button>
         </td>
      );
   };

   const handleDelete = (id) => {
      startDeleteUser(id);
   };

   if (status === "Checking") {
      return <Spinner />;
   }

   return (
      <ReactTable
         columns={columns}
         data={users}
         handleBotton={handleBotton}
         handleAccion={handleAccion}
         initialLimit={10}
         title={"Usuarios"}
         Subtitle={"Listado de usuarios"}
      />
   );
};

export default Tabla_Usuario;
