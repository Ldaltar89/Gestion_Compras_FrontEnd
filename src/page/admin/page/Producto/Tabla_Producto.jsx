import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useProductoStore } from "../../../../hooks/useProductoStore";
import { useEffect } from "react";
import Spinner from "../../../../components/Spinner";

const Tabla_Producto = () => {
   const { producto, status } = useSelector((state) => state.producto);

   const { startProducto, startDeleteProducto } = useProductoStore();

   useEffect(() => {
      startProducto();
   }, []);

   const handleDeleteProducto = (id) => {
      startDeleteProducto(id);
   };

   if (status === "Checking") {
      return <Spinner />;
   }
   return (
      <div className="animate__animated animate__fadeIn animate__faster px-4 py-8 sm:px-6 lg:px-8">
         <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
               <h1 className="text-2xl font-semibold leading-6 text-gray-900">
                  Listado de Productos
               </h1>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
               <Link
                  to={"/producto/crear"}
                  className="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
               >
                  Añadir Producto
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
                                 className="whitespace-nowrap py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6"
                              >
                                 Producto
                              </th>
                              <th
                                 scope="col"
                                 className="whitespace-nowrappx-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                              >
                                 Proveedor
                              </th>
                              <th
                                 scope="col"
                                 className="whitespace-nowrap px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                              >
                                 Marca
                              </th>
                              <th
                                 scope="col"
                                 className="whitespace-nowrap px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                              >
                                 Categoria
                              </th>
                              <th
                                 scope="col"
                                 className="whitespace-nowrap px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                              >
                                 Precio
                              </th>
                              <th
                                 scope="col"
                                 className="whitespace-nowrap px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                              >
                                 Peso
                              </th>
                              <th
                                 scope="col"
                                 className="whitespace-nowrap px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                              >
                                 Unidad
                              </th>
                              <th
                                 scope="col"
                                 className="whitespace-nowrap px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                              >
                                 Envase
                              </th>
                              <th
                                 scope="col"
                                 className="whitespace-nowrap px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                              >
                                 Elaborado
                              </th>
                              <th
                                 scope="col"
                                 className="whitespace-nowrap px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                              >
                                 Caducidad
                              </th>
                              <th
                                 scope="col"
                                 className="whitespace-nowrap px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                              >
                                 Stock
                              </th>
                              <th
                                 scope="col"
                                 className="whitespace-nowrap px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                              >
                                 Accion
                              </th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                           {producto.map((items, i) => (
                              <tr key={i}>
                                 <td className="whitespace-nowrap py-4 pl-4 pr-3 text-center text-sm font-medium text-gray-900 sm:pl-6">
                                    {items.producto}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                                    <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-700/10">
                                       {items.proveedor.nombres}{" "}
                                       {items.proveedor.apellidos}
                                    </span>
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                                    {items.marca.nombre}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                                    {items.categoria.nombre}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                                    {items.precio}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                                    {items.peso}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                                    {items.unidad}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                                    {items.envase}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                                    {items.fecha_elaboracion.split("T")[0]}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                                    {items.fecha_caducacion.split("T")[0]}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                       {items.stock}
                                    </span>
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
                                          handleDeleteProducto(items._id)
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

export default Tabla_Producto;
