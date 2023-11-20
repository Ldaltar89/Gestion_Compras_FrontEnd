import React, { useEffect } from "react";
import { useAuthStore, useForm } from "../../../../hooks";
import Swal from "sweetalert2";

const loginFormFields = {
   loginEmail: "admin@gmail.com",
   loginPassword: "123456",
};

const Login = () => {
   const { startLogin, errorMessage } = useAuthStore();

   const { loginEmail, loginPassword, onInputChange } =
      useForm(loginFormFields);

   const loginSubmit = (event) => {
      event.preventDefault();
      startLogin({ email: loginEmail, password: loginPassword });
   };

   useEffect(() => {
      if (errorMessage !== undefined) {
         Swal.fire("Error en la Autenticacion", errorMessage, "error");
      }
   }, [errorMessage]);

   return (
      <div className="bg-gray-50">
         <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
            <a
               href="#"
               className="mb-6 flex items-center text-2xl font-semibold text-gray-900"
            >
               <img
                  className="mr-2 h-8 w-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                  alt="logo"
               />
               Flowbuy
            </a>
            <div className="w-full rounded-lg bg-white shadow dark:border   sm:max-w-md md:mt-0 xl:p-0">
               <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900  md:text-2xl">
                     Inicia Sesion con tu Cuenta
                  </h1>
                  <form
                     className="space-y-4 md:space-y-6"
                     action="#"
                     onSubmit={loginSubmit}
                  >
                     <div>
                        <label className="mb-2 block text-sm font-medium text-gray-900 ">
                           Correo
                        </label>
                        <input
                           type="email"
                           name="loginEmail"
                           value={loginEmail}
                           onChange={onInputChange}
                           id="email"
                           className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900       sm:text-sm"
                           placeholder="usuario@gmail.com"
                           required=""
                        />
                     </div>
                     <div>
                        <label className="mb-2 block text-sm font-medium text-gray-900 ">
                           Contraseña
                        </label>
                        <input
                           type="password"
                           name="loginPassword"
                           value={loginPassword}
                           onChange={onInputChange}
                           id="password"
                           placeholder="••••••••"
                           className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900       sm:text-sm"
                           required=""
                        />
                     </div>
                     <div className="flex items-center justify-between"></div>
                     <button
                        type="submit"
                        className="font-mediumfocus:outline-none w-full rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
                     >
                        Sign in
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
