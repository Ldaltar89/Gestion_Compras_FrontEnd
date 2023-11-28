import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRolStore } from "../../../../hooks/useRolStore";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useUserStore } from "../../../../hooks/useUserStore";
import SpinnerBotton from "../../../../components/SpinnerBotton";

const Crear_Usuario = () => {
   const { rol } = useSelector((state) => state.rol);
   const { statusBotton } = useSelector((state) => state.user);
   const { startRol } = useRolStore();
   const { startRegister } = useUserStore();

   useEffect(() => {
      startRol();
   }, []);

   return (
      <div className="animate__animated animate__fadeIn animate__faster m-5 mt-5 h-auto md:m-10">
         {/* <!-- component --> */}
         <div className="sm:flex-auto">
            <h1 className="text-2xl font-semibold leading-6 text-gray-900">
               Crear Usuario
            </h1>
         </div>
         <Formik
            initialValues={{
               name: "",
               email: "",
               password: "",
               rol: "",
            }}
            validationSchema={Yup.object({
               name: Yup.string().required("El nombre es requerido"),
               email: Yup.string()
                  .email("El email es invalido")
                  .required("El email es requerido"),
               password: Yup.string()
                  .required("La contraseña es requerido")
                  .min(6, "Debe ser minimo 6 caracteres"),
               rol: Yup.string().required("El rol es requerido"),
            })}
            onSubmit={(values) => {
               startRegister(values);
            }}
         >
            {({ errors, touched }) => (
               <Form>
                  <div className="my-2 mb-4 flex flex-col rounded border bg-white px-4 pb-8 pt-6 md:px-8">
                     <div className="-mx-3 mb-6 md:flex">
                        <div className="mb-6 px-3 md:mb-0 md:w-1/2">
                           <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                              Nombre Completo
                           </label>
                           <Field
                              name="name"
                              className={`mb-3 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                 errors.name && touched.name
                                    ? "border-red-600 ring-1 ring-red-500"
                                    : "focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                              }`}
                              type="text"
                              placeholder="Nombre Completo del Usuario"
                           />
                           <div className="text-red-500 ">
                              <ErrorMessage name="name" />
                           </div>
                        </div>
                        <div className="mb-6 px-3 md:mb-0 md:w-1/2">
                           <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                              Correo
                           </label>
                           <Field
                              name="email"
                              className={`mb-3 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                 errors.email && touched.email
                                    ? "border-red-600 ring-1 ring-red-500"
                                    : "focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                              }`}
                              type="email"
                              placeholder="Email del usuario"
                           />
                           <div className="text-red-500">
                              <ErrorMessage name="email" />
                           </div>
                        </div>
                     </div>
                     <div className="-mx-3 mb-6 md:flex">
                        <div className="mb-6 px-3 md:mb-0 md:w-1/2">
                           <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                              Rol
                           </label>
                           <div className="relative">
                              <Field
                                 as="select"
                                 name="rol"
                                 className={`mb-3 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                    errors.rol && touched.rol
                                       ? "border-red-600 ring-1 ring-red-500"
                                       : "focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                                 }`}
                              >
                                 <option value="">selecciones un Rol</option>
                                 {rol.map((items) => (
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
                              <ErrorMessage name="rol" />
                           </div>
                        </div>
                        <div className="mb-6 px-3 md:mb-0 md:w-1/2">
                           <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                              Contraseña
                           </label>
                           <Field
                              name="password"
                              className={`mb-3 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                 errors.password && touched.password
                                    ? "border-red-600 ring-1 ring-red-500"
                                    : "focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                              }`}
                              type="password"
                              placeholder="••••••••"
                           />
                           <div className="text-red-500">
                              <ErrorMessage name="password" />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0 ">
                     <Link
                        to={"/usuario"}
                        className="flex items-center justify-center gap-2 rounded-lg border bg-gray-50 px-4 py-1.5 text-sm font-medium text-black hover:bg-gray-100"
                     >
                        <span>Cancelar</span>
                     </Link>
                     {statusBotton === "checkingAdd" ? (
                        <SpinnerBotton title={"Creando..."} />
                     ) : (
                        <button
                           type="submit"
                           className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                        >
                           <span>Crear</span>
                        </button>
                     )}
                  </div>
               </Form>
            )}
         </Formik>
      </div>
   );
};

export default Crear_Usuario;
