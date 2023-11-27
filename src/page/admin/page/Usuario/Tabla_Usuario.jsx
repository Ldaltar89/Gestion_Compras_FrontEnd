import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useUserStore } from "../../../../hooks/useUserStore";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Spinner from "../../../../components/Spinner";

const Tabla_Usuario = () => {
   const { users, status } = useSelector((state) => state.user);
   const { startUser, startDeleteUser } = useUserStore();

   useEffect(() => {
      startUser();
   }, []);

   const handleDelete = (id) => {
      startDeleteUser(id);
   };

   if (status === "Checking") {
      return <Spinner />;
   }

   return (
      <div className="animate__animated animate__fadeIn animate__faster px-4 py-8 sm:px-6 lg:px-8">
         <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
               <h1 className="text-2xl font-semibold leading-6 text-gray-900">
                  Listado de Usuarios
               </h1>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
               <Link
                  to={"/usuario/crear"}
                  className="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
               >
                  Añadir Usuario
               </Link>
            </div>
         </div>
         <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
               <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                     <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-gray-50">
                           <tr>
                              <th
                                 scope="col"
                                 className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6"
                              >
                                 Nombre de usuario
                              </th>
                              <th
                                 scope="col"
                                 className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                              >
                                 Email
                              </th>
                              <th
                                 scope="col"
                                 className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                              >
                                 Rol
                              </th>
                              <th
                                 scope="col"
                                 className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                              >
                                 Acción
                              </th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                           {users.map((items, i) => (
                              <tr key={i}>
                                 <td className="whitespace-nowrap py-4 pl-4 pr-3 text-center text-sm font-medium text-gray-900 sm:pl-6">
                                    {items.name}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                                    {items.email}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                                    {items.rol.nombre}
                                 </td>
                                 <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-center text-sm font-medium sm:pr-6">
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
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Tabla_Usuario;
