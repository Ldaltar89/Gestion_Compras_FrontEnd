import { HiCog6Tooth } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { RiBox3Line, RiUser2Line, RiUserAddLine } from "react-icons/ri";
import { useSelector } from "react-redux";

function className(...classes) {
   return classes.filter(Boolean).join(" ");
}

const SidebarMobil = () => {
   const { user } = useSelector((state) => state.auth);
   const navigation = [
      {
         name: "Producto",
         url: "producto",
         icon: RiBox3Line,
         protected: ["USER", "ADMIN"],
      },
      {
         name: "Proveedor",
         url: "proveedor",
         icon: RiUser2Line,
         protected: ["ADMIN"],
      },
      {
         name: "Usuarios",
         url: "usuario",
         icon: RiUserAddLine,
         protected: ["ADMIN"],
      },
   ];

   const items = navigation.filter((role) => role.protected.includes(user.rol));
   return (
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
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
               <li className="mt-auto">
                  <a
                     href="#"
                     className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                  >
                     <HiCog6Tooth
                        className="h-6 w-6 shrink-0"
                        aria-hidden="true"
                     />
                     Settings
                  </a>
               </li>
            </ul>
         </nav>
      </div>
   );
};

export default SidebarMobil;
