import { Fragment } from "react";
import { HiBars3 } from "react-icons/hi2";
import { HiChevronDown } from "react-icons/hi2";
import { Menu, Transition } from "@headlessui/react";
import { useAuthStore } from "../hooks";
import { useSelector } from "react-redux";

function className(...classes) {
   return classes.filter(Boolean).join(" ");
}

const Header = ({ setSidebarOpen }) => {
   const { startLogout } = useAuthStore();

   const { user } = useSelector((state) => state.auth);

   return (
      <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
         <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
         >
            <span className="sr-only">Open sidebar</span>
            <HiBars3 className="h-6 w-6" aria-hidden="true" />
         </button>

         {/* Separator */}
         <div
            className="h-6 w-px bg-gray-900/10 lg:hidden"
            aria-hidden="true"
         />

         <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="relative flex flex-1"></div>
            <div className="flex items-center gap-x-4 lg:gap-x-6">
               {/* Separator */}
               <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                  aria-hidden="true"
               />

               {/* Profile dropdown */}
               <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                     <span className="sr-only">Open user menu</span>
                     <span className="inline-block h-8 w-8 overflow-hidden rounded-full bg-gray-100">
                        <svg
                           className="h-full w-full text-gray-300"
                           fill="currentColor"
                           viewBox="0 0 24 24"
                        >
                           <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                     </span>
                     <span className="hidden lg:flex lg:items-center">
                        <span
                           className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                           aria-hidden="true"
                        >
                           {user.name}
                        </span>
                        <HiChevronDown
                           className="ml-2 h-5 w-5 text-gray-400"
                           aria-hidden="true"
                        />
                     </span>
                  </Menu.Button>
                  <Transition
                     as={Fragment}
                     enter="transition ease-out duration-100"
                     enterFrom="transform opacity-0 scale-95"
                     enterTo="transform opacity-100 scale-100"
                     leave="transition ease-in duration-75"
                     leaveFrom="transform opacity-100 scale-100"
                     leaveTo="transform opacity-0 scale-95"
                  >
                     <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                        <Menu.Item>
                           {({ active }) => (
                              <span
                                 className={className(
                                    active ? "bg-gray-50" : "",
                                    "block px-3 py-1 text-sm leading-6 text-gray-900"
                                 )}
                                 onClick={() => startLogout()}
                              >
                                 Cerrar Sesion
                              </span>
                           )}
                        </Menu.Item>
                     </Menu.Items>
                  </Transition>
               </Menu>
            </div>
         </div>
      </div>
   );
};

export default Header;
