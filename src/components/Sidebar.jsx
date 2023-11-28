import { RiBox3Line, RiUser2Line, RiUserAddLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function className(...classes) {
   return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
   const { user } = useSelector((state) => state.auth);
   const navigation = [
      {
         name: "Producto",
         url: "producto",
         icon: RiBox3Line,
         protected: ["Usuario", "Administrador"],
      },
      {
         name: "Proveedor",
         url: "proveedor",
         icon: RiUser2Line,
         protected: ["Administrador"],
      },
      {
         name: "Usuarios",
         url: "usuario",
         icon: RiUserAddLine,
         protected: ["Administrador"],
      },
   ];

   const items = navigation.filter((role) => role.protected.includes(user.rol));

   return (
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
         <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center gap-5">
               <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
               />
               <span className="font-semibold text-white">
                  {" "}
                  Sistema de inventario{" "}
               </span>
            </div>
            <div className="relative flex items-center space-x-3 rounded-lg border border-gray-700 bg-gray-900 px-6 py-5 ">
               <div className="flex-shrink-0">
                  <span className="inline-block h-10 w-10 overflow-hidden rounded-full bg-gray-100">
                     <svg
                        className="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                     >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                     </svg>
                  </span>
               </div>
               <div className="min-w-0 flex-1">
                  <span className="">
                     <span className="absolute inset-0" aria-hidden="true" />
                     <p className="text-xs font-medium text-white">
                        {user.name}
                     </p>
                     {user.rol === "Administrador" ? (
                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-500 ring-1 ring-inset ring-green-600/20">
                           {user.rol}
                        </span>
                     ) : (
                        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">
                           {user.rol}
                        </span>
                     )}
                  </span>
               </div>
            </div>
            <nav className="flex flex-1 flex-col">
               <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                     <ul role="list" className="-mx-2 space-y-1">
                        {items.map((item) => (
                           <li key={item.name}>
                              <NavLink
                                 to={item.url}
                                 className={({ isActive }) =>
                                    className(
                                       isActive
                                          ? "bg-gray-800 text-white"
                                          : "text-gray-400 hover:bg-gray-800 hover:text-white",
                                       "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                                    )
                                 }
                              >
                                 <item.icon
                                    className="h-6 w-6 shrink-0"
                                    aria-hidden="true"
                                 />
                                 {item.name}
                              </NavLink>
                           </li>
                        ))}
                     </ul>
                  </li>
               </ul>
            </nav>
         </div>
      </div>
   );
};

export default Sidebar;
