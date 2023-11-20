import {
   RiBox3Line,
   RiUser2Line,
   RiUserAddLine,
   RiLogoutBoxLine,
} from "react-icons/ri";
import { NavLink } from "react-router-dom";

const navigation = [
   { name: "Producto", url: "producto", icon: RiBox3Line },
   { name: "Proveedor", url: "proveedor", icon: RiUser2Line },
   { name: "Usuarios", url: "usuario", icon: RiUserAddLine },
   { name: "Marca", url: "marca", icon: RiLogoutBoxLine },
];

function className(...classes) {
   return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
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
            <nav className="flex flex-1 flex-col">
               <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                     <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
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
