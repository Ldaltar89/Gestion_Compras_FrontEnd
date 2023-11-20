import { RiAddFill, RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useProveedorStore } from "../../../../hooks/useProveedorStore";
import { useEffect } from "react";

const Tabla_Proveedor = () => {
   const { proveedor, status } = useSelector((state) => state.proveedor);

   const { startProveedor, deleteProveedor } = useProveedorStore();

   useEffect(() => {
      startProveedor();
   }, []);

   const handleDeleteProveedor = (id) => {
      deleteProveedor(id);
   };

   if (status === "Checking") {
      return (
         <div className="flex min-h-[50rem] items-center justify-center">
            <div className="text-center">
               <div role="status">
                  <svg
                     aria-hidden="true"
                     className="inline h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                     viewBox="0 0 100 101"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                     />
                     <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                     />
                  </svg>
                  <span className="sr-only">Loading...</span>
               </div>
            </div>
         </div>
      );
   }

   return (
      <div className="px-4 py-8 sm:px-6 lg:px-8">
         <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
               <h1 className="text-2xl font-semibold leading-6 text-gray-900">
                  Listado de Proveedores
               </h1>
               <p className="mt-2 text-sm text-gray-700">
                  A list of all the users in your account including their name,
                  title, email and role.
               </p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
               <Link
                  to={"/proveedor/crear"}
                  className="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
               >
                  Añadir Proveedor
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
                                 Nombres
                              </th>
                              <th
                                 scope="col"
                                 className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                              >
                                 Apellidos
                              </th>
                              <th
                                 scope="col"
                                 className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                              >
                                 Correo
                              </th>
                              <th
                                 scope="col"
                                 className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                              >
                                 Telefono
                              </th>
                              <th
                                 scope="col"
                                 className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                              >
                                 Ciudad
                              </th>
                              <th
                                 scope="col"
                                 className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                              >
                                 Empresa
                              </th>
                              <th
                                 scope="col"
                                 className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                              >
                                 Accion
                              </th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                           {proveedor.map((items, i) => (
                              <tr key={i}>
                                 <td className="whitespace-nowrap py-4 pl-4 pr-3 text-center text-sm font-medium text-gray-900 sm:pl-6">
                                    {items.nombres}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                                    {items.apellidos}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                                    {items.correo}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                                    {items.telefono}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                                    {items.ciudad.nombre}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                                    {items.empresa.nombre}
                                 </td>
                                 <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-center text-sm font-medium sm:pr-6">
                                    <button
                                       type="button"
                                       className="inline-flex items-center gap-x-1.5 rounded-md bg-red-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
                                       onClick={() =>
                                          handleDeleteProveedor(items._id)
                                       }
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

export default Tabla_Proveedor;