import { Link, useParams } from "react-router-dom";
import { useProveedorStore } from "../../../../hooks/useProveedorStore";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Spinner from "../../../../components/Spinner";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useCiudadStore } from "../../../../hooks/useCiudadStore";
import { useEmpresaStore } from "../../../../hooks/useEmpresaStore";
import SpinnerBotton from "../../../../components/SpinnerBotton";

const Editar_Proveedor = () => {
   const { startGetIdProveedor, startPutProveedor } = useProveedorStore();
   const { startCiudad } = useCiudadStore();
   const { startEmpresa } = useEmpresaStore();
   const { ciudad } = useSelector((state) => state.ciudad);
   const { empresa } = useSelector((state) => state.empresa);
   const { status, viewProveedor, statusBotton } = useSelector(
      (state) => state.proveedor
   );
   const { id } = useParams();

   useEffect(() => {
      startGetIdProveedor(id);
      startCiudad();
      startEmpresa();
   }, []);

   if (status === "Checking") {
      return <Spinner />;
   }

   return (
      <div className="animate__animated animate__fadeIn animate__faster m-5 mt-5 h-auto md:m-10">
         {/* <!-- component --> */}
         <div className="sm:flex-auto">
            <h1 className="text-2xl font-semibold leading-6 text-gray-900">
               Editar Proveedor
            </h1>
         </div>
         <Formik
            initialValues={{
               id: id,
               nombres: viewProveedor.nombres,
               apellidos: viewProveedor.apellidos,
               cedula: viewProveedor.cedula,
               telefono: viewProveedor.telefono,
               ciudad: viewProveedor.ciudad,
               direccion: viewProveedor.direccion,
               correo: viewProveedor.correo,
               empresa: viewProveedor.empresa,
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
               startPutProveedor(values);
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
                              className={`mb-3 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                 errors.nombres && touched.nombres
                                    ? "border-red-600 ring-1 ring-red-500"
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
                              className={`mb-3 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                 errors.apellidos && touched.apellidos
                                    ? "border-red-600 ring-1 ring-red-500"
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
                              className={`mb-3 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                 errors.cedula && touched.cedula
                                    ? "border-red-600 ring-1 ring-red-500"
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
                              className={`mb-3 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                 errors.telefono && touched.telefono
                                    ? "border-red-600 ring-1 ring-red-500"
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
                                 className={`mb-3 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                    errors.ciudad && touched.ciudad
                                       ? "border-red-600 ring-1 ring-red-500"
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
                              className={`mb-3 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                 errors.direccion && touched.direccion
                                    ? "border-red-600 ring-1 ring-red-500"
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
                              className={`mb-3 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                 errors.correo && touched.correo
                                    ? "border-red-600 ring-1 ring-red-500"
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
                                 className={`mb-3 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                    errors.empresa && touched.empresa
                                       ? "border-red-600 ring-1 ring-red-500"
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
                     {statusBotton === "checkingPut" ? (
                        <SpinnerBotton title={"Actualizando"} />
                     ) : (
                        <button
                           type="submit"
                           className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                        >
                           <span>Actualizar</span>
                        </button>
                     )}
                  </div>
               </Form>
            )}
         </Formik>
      </div>
   );
};

export default Editar_Proveedor;
