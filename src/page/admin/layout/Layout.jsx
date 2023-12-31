import { Fragment, useState } from "react";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import { HiMiniXMark } from "react-icons/hi2";
import SidebarMobil from "../../../components/SidebarMobil";
import { Dialog, Transition } from "@headlessui/react";

function Layout({ children }) {
   const [sidebarOpen, setSidebarOpen] = useState(false);
   return (
      <div className="animate__animated animate__fadeIn animate__faster">
         <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
               as="div"
               className="relative z-50 lg:hidden"
               onClose={setSidebarOpen}
            >
               <Transition.Child
                  as={Fragment}
                  enter="transition-opacity ease-linear duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity ease-linear duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
               >
                  <div className="fixed inset-0 bg-gray-900/80" />
               </Transition.Child>

               <div className="fixed inset-0 flex">
                  <Transition.Child
                     as={Fragment}
                     enter="transition ease-in-out duration-300 transform"
                     enterFrom="-translate-x-full"
                     enterTo="translate-x-0"
                     leave="transition ease-in-out duration-300 transform"
                     leaveFrom="translate-x-0"
                     leaveTo="-translate-x-full"
                  >
                     <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                        <Transition.Child
                           as={Fragment}
                           enter="ease-in-out duration-300"
                           enterFrom="opacity-0"
                           enterTo="opacity-100"
                           leave="ease-in-out duration-300"
                           leaveFrom="opacity-100"
                           leaveTo="opacity-0"
                        >
                           <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                              <button
                                 type="button"
                                 className="-m-2.5 p-2.5"
                                 onClick={() => setSidebarOpen(false)}
                              >
                                 <span className="sr-only">Close sidebar</span>
                                 <HiMiniXMark
                                    className="h-6 w-6 text-white"
                                    aria-hidden="true"
                                 />
                              </button>
                           </div>
                        </Transition.Child>
                        <SidebarMobil />
                     </Dialog.Panel>
                  </Transition.Child>
               </div>
            </Dialog>
         </Transition.Root>
         <Sidebar />
         <div className="lg:pl-72">
            <Header setSidebarOpen={setSidebarOpen} />
            <main className="">
               <div className="">{children}</div>
            </main>
         </div>
      </div>
   );
}

export default Layout;
