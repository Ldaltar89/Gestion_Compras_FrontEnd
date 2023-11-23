/* eslint-disable react-hooks/exhaustive-deps */
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useProveedorStore } from "../../../../hooks/useProveedorStore";
import { useEffect } from "react";
import Spinner from "../../../../components/Spinner";

const Tabla_Proveedor = () => {
   const { proveedor, status } = useSelector((state) => state.proveedor);

   const { startProveedor, startdDeleteProveedor } = useProveedorStore();

   useEffect(() => {
      startProveedor();
   }, []);

   const handleDeleteProveedor = (id) => {
      startdDeleteProveedor(id);
   };

   if (status === "Checking") {
      return <Spinner />;
   }

   return (
      <div className="px-4 py-8 sm:px-6 lg:px-8">
         <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
               <h1 className="text-2xl font-semibold leading-6 text-gray-900">
                  Listado de Proveedores
               </h1>
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
                                    <Link
                                       to={`editar/${items._id}`}
                                       className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                                    >
                                       <RiEdit2Line
                                          className="-ml-0.5 h-5 w-5"
                                          aria-hidden="true"
                                       />
                                    </Link>
                                    <button
                                       type="button"
                                       className="ml-2 inline-flex items-center gap-x-1.5 rounded-md bg-red-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
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
