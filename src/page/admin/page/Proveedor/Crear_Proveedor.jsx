import { Link } from "react-router-dom";
import { useForm } from "../../../../hooks";
import { useSelector } from "react-redux";
import { useCiudadStore } from "../../../../hooks/useCiudadStore";
import { useEmpresaStore } from "../../../../hooks/useEmpresaStore";
import { useProveedorStore } from "../../../../hooks/useProveedorStore";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";

const Crear_Proveedor = () => {
   const { ciudad } = useSelector((state) => state.ciudad);
   const { empresa } = useSelector((state) => state.empresa);
   const { startCiudad } = useCiudadStore();
   const { startEmpresa } = useEmpresaStore();
   const { startRegisterProveedor } = useProveedorStore();

   useEffect(() => {
      startCiudad();
   }, []);

   useEffect(() => {
      startEmpresa();
   }, []);
   return (
      <div className="m-5 mt-5 h-auto md:m-10">
         {/* <!-- component --> */}
         <div className="sm:flex-auto">
            <h1 className="text-2xl font-semibold leading-6 text-gray-900">
               Crear Proveedor
            </h1>
         </div>
         <Formik
            initialValues={{
               nombres: "",
               apellidos: "",
               cedula: "",
               telefono: "",
               ciudad: "",
               direccion: "",
               correo: "",
               empresa: "",
            }}
            validationSchema={Yup.object({
               nombres: Yup.string()
                  .matches(
                     /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                     "Los nombres solo puede contener letras y espacios"
                  )
                  .required("El nombre es requerido"),
               apellidos: Yup.string()
                  .matches(
                     /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                     "Los apellidos solo puede contener letras y espacios"
                  )
                  .required("El apellido es requerido"),
               cedula: Yup.string()
                  .matches(/^[0-9]+$/, "Solor números pemitido")
                  .min(10, "Debe de ser minimo 10 numeros")
                  .max(10, "Debe de ser maximo de 10")
                  .required("La cedula es requerido"),
               telefono: Yup.string()
                  .matches(/^[0-9]+$/, "Solor números pemitido")
                  .min(9, "Debe de ser minimo 9 numeros")
                  .max(10, "Debe de ser maximo de 10")
                  .required("El telefono es requerido"),
               ciudad: Yup.string().required("La ciudad es requerida"),
               direccion: Yup.string().required("La direccion es requerida"),
               correo: Yup.string()
                  .email("El email es invalido")
                  .matches(
                     /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                     "El correo solo puede contener letras, numeros, puntos y guiones."
                  )
                  .required("El email es requerido"),
               empresa: Yup.string().required("La empresa es requerida"),
            })}
            onSubmit={(values) => {
               startRegisterProveedor(values);
            }}
         >
            {({ errors, touched }) => (
               <Form>
                  <div className="my-2 mb-4 flex flex-col rounded border bg-white px-4 pb-8 pt-6 md:px-8">
                     <div className="-mx-3 mb-6 md:flex">
                        <div className="mb-6 px-3 md:mb-0 md:w-1/2">
                           <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                              Nombres Completos
                           </label>
                           <Field
                              name="nombres"
                              className={`bg-grey-lighter text-grey-darker mb-3 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                 errors.nombres && touched.nombres
                                    ? "focus:border-red-600 focus:ring-1 focus:ring-red-500"
                                    : "focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                              }`}
                              type="text"
                              placeholder="Nombres Completos del Proveedor"
                           />
                           <div className="text-red-500">
                              <ErrorMessage name="nombres" />
                           </div>
                        </div>
                        <div className="mb-6 px-3 md:mb-0 md:w-1/2">
                           <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                              Apellidos Completos
                           </label>
                           <Field
                              name="apellidos"
                              className={`bg-grey-lighter text-grey-darker mb-3 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                 errors.apellidos && touched.apellidos
                                    ? "focus:border-red-600 focus:ring-1 focus:ring-red-500"
                                    : "focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                              }`}
                              type="text"
                              placeholder="Apellidos Completos del Proveedor"
                           />
                           <div className="text-red-500">
                              <ErrorMessage name="apellidos" />
                           </div>
                        </div>
                     </div>
                     <div className="-mx-3 mb-6 md:flex">
                        <div className="mb-6 px-3 md:mb-0 md:w-1/2">
                           <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                              Cédula
                           </label>
                           <Field
                              name="cedula"
                              className={`bg-grey-lighter text-grey-darker mb-3 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                 errors.cedula && touched.cedula
                                    ? "focus:border-red-600 focus:ring-1 focus:ring-red-500"
                                    : "focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                              }`}
                              type="text"
                              placeholder="Cédula del Proveedor"
                           />
                           <div className="text-red-500">
                              <ErrorMessage name="cedula" />
                           </div>
                        </div>
                        <div className="mb-6 px-3 md:mb-0 md:w-1/2">
                           <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                              Telefono
                           </label>
                           <Field
                              name="telefono"
                              className={`bg-grey-lighter text-grey-darker mb-3 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                 errors.telefono && touched.telefono
                                    ? "focus:border-red-600 focus:ring-1 focus:ring-red-500"
                                    : "focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                              }`}
                              type="text"
                              placeholder="Telefono del Proveedor"
                           />
                           <div className="text-red-500">
                              <ErrorMessage name="telefono" />
                           </div>
                        </div>
                        <div className="mb-6 px-3 md:mb-0 md:w-1/2">
                           <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                              Ciudad
                           </label>
                           <div className="relative">
                              <Field
                                 as="select"
                                 name="ciudad"
                                 className={`bg-grey-lighter text-grey-darker mb-3 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                    errors.ciudad && touched.ciudad
                                       ? "focus:border-red-600 focus:ring-1 focus:ring-red-500"
                                       : "focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                                 }`}
                              >
                                 <option value="">selecciones un Ciudad</option>
                                 {ciudad.map((items) => (
                                    <option key={items._id} value={items._id}>
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
                              <ErrorMessage name="ciudad" />
                           </div>
                        </div>
                     </div>
                     <div className="-mx-3 mb-6 md:flex">
                        <div className="mb-6 px-3 md:mb-0 md:w-1/2">
                           <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                              Dirección
                           </label>
                           <Field
                              name="direccion"
                              className={`bg-grey-lighter text-grey-darker mb-3 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                 errors.direccion && touched.direccion
                                    ? "focus:border-red-600 focus:ring-1 focus:ring-red-500"
                                    : "focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                              }`}
                              type="text"
                              placeholder="Dirección del Proveedor"
                           />
                           <div className="text-red-500">
                              <ErrorMessage name="direccion" />
                           </div>
                        </div>
                        <div className="mb-6 px-3 md:mb-0 md:w-1/2">
                           <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                              Correo
                           </label>
                           <Field
                              name="correo"
                              className={`bg-grey-lighter text-grey-darker mb-3 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                 errors.correo && touched.correo
                                    ? "focus:border-red-600 focus:ring-1 focus:ring-red-500"
                                    : "focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                              }`}
                              type="email"
                              placeholder="Correo del proveedor"
                           />
                           <div className="text-red-500">
                              <ErrorMessage name="correo" />
                           </div>
                        </div>
                        <div className="mb-6 px-3 md:mb-0 md:w-1/2">
                           <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                              Empresa
                           </label>
                           <div className="relative">
                              <Field
                                 as="select"
                                 name="empresa"
                                 className={`bg-grey-lighter text-grey-darker mb-3 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                    errors.empresa && touched.empresa
                                       ? "focus:border-red-600 focus:ring-1 focus:ring-red-500"
                                       : "focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                                 }`}
                              >
                                 <option value="">
                                    selecciones una Empresa
                                 </option>
                                 {empresa.map((items) => (
                                    <option key={items._id} value={items._id}>
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
                              <ErrorMessage name="empresa" />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0 ">
                     <Link
                        to={"/proveedor"}
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

export default Crear_Proveedor;