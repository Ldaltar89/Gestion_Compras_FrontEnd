import { useEffect } from "react";
import { useAuthStore } from "../../../../hooks";
import Swal from "sweetalert2";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";

const Login = () => {
   const { startLogin, errorMessage } = useAuthStore();
   const { statusButton } = useSelector((state) => state.auth);

   useEffect(() => {
      if (errorMessage !== undefined) {
         Swal.fire("Error en la Autenticacion", errorMessage, "error");
      }
   }, [errorMessage]);

   return (
      <div className="animate__animated animate__fadeIn animate__faster flex min-h-screen flex-1">
         <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
               <div>
                  <img
                     className="h-10 w-auto"
                     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                     alt="Your Company"
                  />
                  <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                     Iniciar Sesión
                  </h2>
               </div>

               <div className="mt-10">
                  <div>
                     <Formik
                        initialValues={{
                           email: "admin@gmail.com",
                           password: "123456",
                        }}
                        validationSchema={Yup.object({
                           email: Yup.string()
                              .email("El email es invalido")
                              .required("El email es requerido"),
                           password: Yup.string()
                              .required("La contraseña es requerido")
                              .min(6, "Debe ser minimo 6 caracteres"),
                        })}
                        onSubmit={(values) => {
                           startLogin(values);
                        }}
                     >
                        {({ errors, touched }) => (
                           <Form>
                              <div>
                                 <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                 >
                                    Correo Electrónico
                                 </label>
                                 <div className="mt-2">
                                    <Field
                                       name="email"
                                       type="email"
                                       className={`mb-2 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                          errors.email && touched.email
                                             ? "border-red-600 ring-1 ring-red-500"
                                             : "focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                                       }`}
                                    />
                                    <div className="text-red-500">
                                       <ErrorMessage name="email" />
                                    </div>
                                 </div>
                              </div>

                              <div>
                                 <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                 >
                                    Contraseña
                                 </label>
                                 <div className="mt-2">
                                    <Field
                                       name="password"
                                       type="password"
                                       className={`mb-2 block w-full appearance-none rounded border px-4 py-1.5 outline-none ${
                                          errors.password && touched.password
                                             ? "border-red-600 ring-1 ring-red-500"
                                             : "focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                                       }`}
                                    />
                                    <div className="text-red-500">
                                       <ErrorMessage name="password" />
                                    </div>
                                 </div>
                              </div>
                              {statusButton === "checkingButton" ? (
                                 <button
                                    type="button"
                                    disabled
                                    className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 "
                                 >
                                    <div
                                       className="mr-3 mt-0.5 inline-block h-5 w-5 animate-spin rounded-full border-[3px] border-current border-t-transparent text-white"
                                       role="status"
                                       aria-label="loading"
                                    >
                                       <span className="sr-only">
                                          Loading...
                                       </span>
                                    </div>{" "}
                                    Accediendo...
                                 </button>
                              ) : (
                                 <div>
                                    <button
                                       type="submit"
                                       className="mt-8 flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-blue-500"
                                    >
                                       Acceder
                                    </button>
                                 </div>
                              )}
                           </Form>
                        )}
                     </Formik>
                  </div>
               </div>
            </div>
         </div>
         <div className="relative hidden w-0 flex-1 lg:block">
            <img
               className="absolute inset-0 h-full w-full object-cover"
               src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
               alt=""
            />
         </div>
      </div>
   );
};

export default Login;
