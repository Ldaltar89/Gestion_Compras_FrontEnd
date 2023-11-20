import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useProductoStore } from "../../../../hooks/useProductoStore";
import { useProveedorStore } from "../../../../hooks/useProveedorStore";
import { useMarcaStore } from "../../../../hooks/useMarcaStore";
import { useCategoriaStore } from "../../../../hooks/useCategoriaStore";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

const Crear_Producto = () => {
   const { proveedor } = useSelector((state) => state.proveedor);
   const { marca } = useSelector((state) => state.marca);
   const { categoria } = useSelector((state) => state.categoria);
   const { startProveedor } = useProveedorStore();
   const { startMarca } = useMarcaStore();
   const { startCategoria } = useCategoriaStore();
   const { startRegisterProducto } = useProductoStore();

   useEffect(() => {
      startCategoria();
   }, []);

   useEffect(() => {
      startMarca();
   }, []);

   useEffect(() => {
      startProveedor();
   }, []);

   return (
      // <div className="h-auto p-10 pt-20 md:ml-64">
      //    {/* <!-- component --> */}
      //    <h1 className="text-lg font-bold">Crear un Producto</h1>
      //    <div className="my-2 mb-4 flex flex-col rounded bg-white px-8 pb-8 pt-6 shadow-md">
      //       <div className="-mx-3 mb-6 md:flex">
      //          <div className="mb-6 px-3 md:mb-0 md:w-1/2">
      //             <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
      //                Producto
      //             </label>
      //             <input
      //                className="bg-grey-lighter text-grey-darker border-red mb-3 block w-full appearance-none rounded border px-4 py-2 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
      //                id="grid-first-name"
      //                type="text"
      //                placeholder="Nombre del Producto"
      //             />
      //          </div>
      //          <div className="mb-6 px-3 md:mb-0 md:w-1/2">
      //             <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
      //                Proveedor
      //             </label>
      //             <div className="relative">
      //                <select
      //                   className="bg-grey-lighter border-grey-lighter text-grey-darker block w-full appearance-none rounded border px-4 py-2 pr-8 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
      //                   id="grid-state"
      //                >
      //                   <option value="">Seleccione el Proveedor</option>
      //                   <option value="Paul Ortega">
      //                      Paul Ortega - Coca Cola
      //                   </option>
      //                   <option value="Ernesto Guevara">
      //                      Ernesto Guevara - Inalecsa
      //                   </option>
      //                   <option value="Francisco Espinoza">
      //                      Francisco Espinoza - Rexona
      //                   </option>
      //                </select>
      //                <svg
      //                   className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
      //                   viewBox="0 0 20 20"
      //                   fill="currentColor"
      //                   aria-hidden="true"
      //                >
      //                   <path
      //                      fillRule="evenodd"
      //                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
      //                      clipRule="evenodd"
      //                   />
      //                </svg>
      //             </div>
      //          </div>
      //          <div className="mb-6 px-3 md:mb-0 md:w-1/2">
      //             <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
      //                Precio
      //             </label>
      //             <input
      //                className="bg-grey-lighter text-grey-darker border-grey-lighter block w-full appearance-none rounded border px-4 py-2 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
      //                id="grid-last-name"
      //                type="number"
      //                placeholder="Precio del Producto"
      //             />
      //          </div>
      //       </div>

      //       <div className="-mx-3 mb-6 md:flex">
      //          <div className="px-3 md:w-full">
      //             <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
      //                Descripción
      //             </label>
      //             <textarea
      //                id="description"
      //                rows="5"
      //                className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg  border border-gray-300 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
      //                placeholder="Escriba una descripción..."
      //             ></textarea>
      //          </div>
      //       </div>
      //       <div className="-mx-3 mb-6 md:flex">
      //          <div className="px-3 md:w-full">
      //             <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
      //                Fecha de Elaboración
      //             </label>
      //             <input
      //                className="bg-grey-lighter text-grey-darker border-grey-lighter mb-3 block w-full appearance-none rounded border px-4 py-2 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
      //                id="grid-password"
      //                type="date"
      //                placeholder="Breve descripción del producto"
      //             />
      //          </div>
      //          <div className="px-3 md:w-full">
      //             <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
      //                Fecha de Caducidad
      //             </label>
      //             <input
      //                className="bg-grey-lighter text-grey-darker border-grey-lighter mb-3 block w-full appearance-none rounded border px-4 py-2 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
      //                id="grid-password"
      //                type="date"
      //                placeholder="Breve descripción del producto"
      //             />
      //          </div>
      //       </div>
      //       <div className="-mx-3 mb-2 md:flex">
      //          <div className="px-3 md:w-1/2">
      //             <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
      //                Marca
      //             </label>
      //             <div className="relative">
      //                <select
      //                   className="bg-grey-lighter border-grey-lighter text-grey-darker block w-full appearance-none rounded border px-4 py-2 pr-8 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
      //                   id="grid-state"
      //                >
      //                   <option value="">Seleccione la Marca</option>
      //                   <option value="Coca Cola">Coca Cola</option>
      //                   <option value="Inalecsa">Inalecsa</option>
      //                   <option value="Rexona">Rexona</option>
      //                </select>
      //                <svg
      //                   className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
      //                   viewBox="0 0 20 20"
      //                   fill="currentColor"
      //                   aria-hidden="true"
      //                >
      //                   <path
      //                      fillRule="evenodd"
      //                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
      //                      clipRule="evenodd"
      //                   />
      //                </svg>
      //             </div>
      //          </div>
      //          <div className="px-3 md:w-1/2 ">
      //             <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
      //                Categoria
      //             </label>
      //             <div className="relative">
      //                <select
      //                   className="bg-grey-lighter border-grey-lighter text-grey-darker block w-full appearance-none rounded border px-4 py-2 pr-8 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
      //                   id="grid-state"
      //                >
      //                   <option value="">Seleccione la Categoria</option>
      //                   <option value="Bebidas">Bebidas</option>
      //                   <option value="Snack">Snack</option>
      //                   <option value="Cuidado Personal">
      //                      Cuidado Personal
      //                   </option>
      //                </select>
      //                <svg
      //                   className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
      //                   viewBox="0 0 20 20"
      //                   fill="currentColor"
      //                   aria-hidden="true"
      //                >
      //                   <path
      //                      fillRule="evenodd"
      //                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
      //                      clipRule="evenodd"
      //                   />
      //                </svg>
      //             </div>
      //          </div>
      //          <div className="mb-6 px-3 md:mb-0 md:w-1/2">
      //             <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
      //                Lote
      //             </label>
      //             <input
      //                className="bg-grey-lighter text-grey-darker border-grey-lighter block w-full appearance-none rounded border px-4 py-2 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
      //                id="grid-city"
      //                type="text"
      //                placeholder="Escriba el Lote"
      //             />
      //          </div>
      //          <div className="mb-6 px-3 md:mb-0 md:w-1/2">
      //             <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
      //                Stock
      //             </label>
      //             <input
      //                className="bg-grey-lighter text-grey-darker border-grey-lighter block w-full appearance-none rounded border px-4 py-2 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
      //                id="grid-city"
      //                type="number"
      //                placeholder="Cantidad"
      //             />
      //          </div>
      //       </div>
      //    </div>
      //    <div className="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0 ">
      //       <Link
      //          to={"/producto"}
      //          className="flex items-center justify-center gap-2 rounded-lg border bg-gray-50 px-4 py-2 text-sm font-medium text-black hover:bg-gray-100"
      //       >
      //          <span>Cancelar</span>
      //       </Link>
      //       <button
      //          type="button"
      //          className="flex items-center justify-center gap-2 rounded-lg bg-blue-800 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      //       >
      //          <span>Crear</span>
      //       </button>
      //    </div>
      // </div>
      <div className="m-5 mt-5 h-auto md:m-10">
         {/* <!-- component --> */}
         <div className="sm:flex-auto">
            <h1 className="text-2xl font-semibold leading-6 text-gray-900">
               Crear Producto
            </h1>
         </div>
         <Formik
            initialValues={{
               producto: "",
               proveedor: "",
               precio: "",
               descripcion: "",
               fecha_elaboracion: "",
               fecha_caducacion: "",
               marca: "",
               categoria: "",
               lote: "",
               stock: "",
            }}
            validationSchema={Yup.object({
               producto: Yup.string().required("El producto es requerido"),
               proveedor: Yup.string().required("El proveedor es requerido"),
               precio: Yup.string().required("El precio es requerido"),
               descripcion: Yup.string().required(
                  "La descripción es requerida"
               ),
               fecha_elaboracion: Yup.string().required(
                  "La fecha de elaboración es requerida"
               ),
               fecha_caducacion: Yup.string().required(
                  "La fecha de caducidad es requerida"
               ),
               marca: Yup.string().required("La marca es requerida"),
               categoria: Yup.string().required("La categoria es requerida"),
               lote: Yup.string().required("El lote es requerido"),
               stock: Yup.string().required("El stock es requerido"),
            })}
            onSubmit={(values) => {
               startRegisterProducto(values);
            }}
         >
            {({ errors, touched }) => (
               <Form>
                  <div className="my-2 mb-4 flex flex-col rounded border bg-white px-4 pb-8 pt-6 md:px-8">
                     <div className="-mx-3 mb-6 md:flex">
                        <div className="mb-6 px-3 md:mb-0 md:w-1/2">
                           <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                              Producto
                           </label>
                           <Field
                              name="producto"
                              className={`bg-grey-lighter text-grey-darker mb-3 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                 errors.producto && touched.producto
                                    ? "focus:border-red-600 focus:ring-1 focus:ring-red-500"
                                    : "focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                              }`}
                              type="text"
                              placeholder="Nombre del producto"
                           />
                           <div className="text-red-500">
                              <ErrorMessage name="producto" />
                           </div>
                        </div>
                        <div className="mb-6 px-3 md:mb-0 md:w-1/2">
                           <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                              Proveedor
                           </label>
                           <div className="relative">
                              <Field
                                 as="select"
                                 name="proveedor"
                                 className={`bg-grey-lighter text-grey-darker mb-3 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                    errors.proveedor && touched.proveedor
                                       ? "focus:border-red-600 focus:ring-1 focus:ring-red-500"
                                       : "focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                                 }`}
                              >
                                 <option value="">
                                    seleccione un Proveedor
                                 </option>
                                 {proveedor.map((items, i) => (
                                    <option key={i} value={items._id}>
                                       {items.nombres} {items.apellidos}
                                    </option>
                                 ))}
                              </Field>

                              <svg
                                 className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                                 viewBox="0 0 20 20"
                                 fill="currentColor"
                                 aria-hidden="true"
                              >
                                 <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                    clipRule="evenodd"
                                 />
                              </svg>
                           </div>
                           <div className="text-red-500">
                              <ErrorMessage name="proveedor" />
                           </div>
                        </div>
                        <div className="mb-6 px-3 md:mb-0 md:w-1/2">
                           <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                              Precio
                           </label>
                           <Field
                              name="precio"
                              className={`bg-grey-lighter text-grey-darker mb-3 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                 errors.precio && touched.precio
                                    ? "focus:border-red-600 focus:ring-1 focus:ring-red-500"
                                    : "focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                              }`}
                              type="number"
                              placeholder="Precio del Producto"
                           />
                           <div className="text-red-500">
                              <ErrorMessage name="precio" />
                           </div>
                        </div>
                     </div>
                     <div className="-mx-3 mb-6 md:flex">
                        <div className="mb-6 px-3 md:mb-0 md:w-1/2">
                           <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                              Descripción
                           </label>
                           <Field
                              as="textarea"
                              name="descripcion"
                              className={`bg-grey-lighter text-grey-darker mb-3 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                 errors.descripcion && touched.descripcion
                                    ? "focus:border-red-600 focus:ring-1 focus:ring-red-500"
                                    : "focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                              }`}
                              type="textarea"
                              placeholder="Escriba una descripción..."
                           />
                           <div className="text-red-500">
                              <ErrorMessage name="descripcion" />
                           </div>
                        </div>
                        <div className="mb-6 px-3 md:mb-0 md:w-1/2">
                           <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                              Marca
                           </label>
                           <div className="relative">
                              <Field
                                 as="select"
                                 name="marca"
                                 className={`bg-grey-lighter text-grey-darker mb-3 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                    errors.marca && touched.marca
                                       ? "focus:border-red-600 focus:ring-1 focus:ring-red-500"
                                       : "focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                                 }`}
                              >
                                 <option value="">selecciones una Marca</option>
                                 {marca.map((items, i) => (
                                    <option key={i} value={items._id}>
                                       {items.nombre}
                                    </option>
                                 ))}
                              </Field>

                              <svg
                                 className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                                 viewBox="0 0 20 20"
                                 fill="currentColor"
                                 aria-hidden="true"
                              >
                                 <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                    clipRule="evenodd"
                                 />
                              </svg>
                           </div>
                           <div className="text-red-500">
                              <ErrorMessage name="marca" />
                           </div>
                        </div>
                     </div>
                     <div className="-mx-3 mb-6 md:flex">
                        <div className="mb-6 px-3 md:mb-0 md:w-1/2">
                           <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                              Fecha de elaboración
                           </label>
                           <Field
                              name="fecha_elaboracion"
                              className={`bg-grey-lighter text-grey-darker mb-3 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                 errors.fecha_elaboracion &&
                                 touched.fecha_elaboracion
                                    ? "focus:border-red-600 focus:ring-1 focus:ring-red-500"
                                    : "focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                              }`}
                              type="date"
                           />
                           <div className="text-red-500">
                              <ErrorMessage name="fecha_elaboracion" />
                           </div>
                        </div>
                        <div className="mb-6 px-3 md:mb-0 md:w-1/2">
                           <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                              Fecha de caducidad
                           </label>
                           <Field
                              name="fecha_caducacion"
                              className={`bg-grey-lighter text-grey-darker mb-3 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                 errors.fecha_caducacion &&
                                 touched.fecha_caducacion
                                    ? "focus:border-red-600 focus:ring-1 focus:ring-red-500"
                                    : "focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                              }`}
                              type="date"
                           />
                           <div className="text-red-500">
                              <ErrorMessage name="fecha_caducacion" />
                           </div>
                        </div>
                     </div>
                     <div className="-mx-3 mb-6 md:flex">
                        <div className="mb-6 px-3 md:mb-0 md:w-1/2">
                           <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                              Categoria
                           </label>
                           <div className="relative">
                              <Field
                                 as="select"
                                 name="categoria"
                                 className={`bg-grey-lighter text-grey-darker mb-3 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                    errors.categoria && touched.categoria
                                       ? "focus:border-red-600 focus:ring-1 focus:ring-red-500"
                                       : "focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                                 }`}
                              >
                                 <option value="">
                                    selecciones una Categoria
                                 </option>
                                 {categoria.map((items, i) => (
                                    <option key={i} value={items._id}>
                                       {items.nombre}
                                    </option>
                                 ))}
                              </Field>

                              <svg
                                 className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                                 viewBox="0 0 20 20"
                                 fill="currentColor"
                                 aria-hidden="true"
                              >
                                 <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                    clipRule="evenodd"
                                 />
                              </svg>
                           </div>
                           <div className="text-red-500">
                              <ErrorMessage name="categoria" />
                           </div>
                        </div>
                        <div className="mb-6 px-3 md:mb-0 md:w-1/2">
                           <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                              Lote
                           </label>
                           <Field
                              name="lote"
                              className={`bg-grey-lighter text-grey-darker mb-3 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                 errors.lote && touched.lote
                                    ? "focus:border-red-600 focus:ring-1 focus:ring-red-500"
                                    : "focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                              }`}
                              type="text"
                              placeholder="Escriba el lote"
                           />
                           <div className="text-red-500">
                              <ErrorMessage name="lote" />
                           </div>
                        </div>
                        <div className="mb-6 px-3 md:mb-0 md:w-1/2">
                           <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                              Stock
                           </label>
                           <Field
                              name="stock"
                              className={`bg-grey-lighter text-grey-darker mb-3 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                 errors.stock && touched.stock
                                    ? "focus:border-red-600 focus:ring-1 focus:ring-red-500"
                                    : "focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                              }`}
                              type="number"
                              placeholder="Cantidad"
                           />
                           <div className="text-red-500">
                              <ErrorMessage name="stock" />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0 ">
                     <Link
                        to={"/producto"}
                        className="flex items-center justify-center gap-2 rounded-lg border bg-gray-50 px-4 py-1.5 text-sm font-medium text-black hover:bg-gray-100"
                     >
                        <span>Cancelar</span>
                     </Link>
                     <button
                        type="submit"
                        className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
                     >
                        <span>Crear</span>
                     </button>
                  </div>
               </Form>
            )}
         </Formik>
      </div>
   );
};

export default Crear_Producto;