/* eslint-disable react/prop-types */

import { useState } from "react";
import {
   ChevronLeftIcon,
   ChevronRightIcon,
   MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { HiListBullet } from "react-icons/hi2";

let numero = 1;
let numero2;
const ReactTable = ({
   columns,
   data,
   handleBotton,
   handleAccion,
   title,
   Subtitle,
   initialLimit = 10,
}) => {
   const [searchTerm, setSearchTerm] = useState("");
   const [currentPage, setCurrentPage] = useState(1);
   const [limit, setLimit] = useState(initialLimit);

   const filteredData = data.filter((item) =>
      Object.values(item).some((value) => {
         if (value !== null && value !== undefined) {
            return value
               .toString()
               .toLowerCase()
               .includes(searchTerm.toLowerCase());
         }
         return false;
      })
   );

   const sortedData = filteredData;

   const getTotalPages = () => Math.ceil(sortedData.length / limit);

   const getPaginatedData = () => {
      const startIndex = (currentPage - 1) * limit;
      numero = 1 + startIndex;
      numero2 =
         sortedData.slice(startIndex, startIndex + limit).length + startIndex;
      return sortedData.slice(startIndex, startIndex + limit);
   };

   const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
   };

   const handleLimitChange = (newLimit) => {
      setLimit(newLimit);
      setCurrentPage(1);
   };

   return (
      <div className="animate__animated animate__fadeIn animate__faster mt-5 px-4 sm:px-6 lg:px-8">
         <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
               <h1 className="mb-5 text-2xl font-semibold leading-6 text-gray-900">
                  {title}
               </h1>
               <p className="text-md mt-2 flex items-center gap-3 text-gray-700">
                  <HiListBullet size={25} /> {Subtitle}
               </p>
            </div>
            <div className="mt-4 items-center sm:ml-16 sm:mt-0 sm:flex-none md:flex md:gap-2">
               <div className="relative rounded-md">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                     <MagnifyingGlassIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                     />
                  </div>
                  <input
                     type="text"
                     className="mb-2 block w-full appearance-none rounded border px-4 py-1.5 pl-10 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500 sm:text-sm sm:leading-6 md:mb-0 md:w-80"
                     placeholder="Buscar por nombres"
                     value={searchTerm}
                     onChange={(e) => setSearchTerm(e.target.value)}
                  />
               </div>
               {handleBotton()}
            </div>
         </div>
         <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
               <div className="inline-block min-w-full py-2 align-middle">
                  <table className="min-w-full divide-y divide-gray-300">
                     <thead>
                        <tr>
                           {columns.map((column) => (
                              <th key={column.key} className={column.className}>
                                 {column.title}
                              </th>
                           ))}
                           <th
                              scope="col"
                              className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                           >
                              Acción
                           </th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-200 bg-white">
                        {getPaginatedData().map((item, i) => (
                           <tr className="border-b text-black" key={i}>
                              {columns.map((column) => (
                                 <td
                                    scope="row"
                                    className={column.classNameTbody}
                                    key={column.key}
                                 >
                                    {column.render
                                       ? column.render(item)
                                       : item[column.key]}
                                 </td>
                              ))}

                              {handleAccion(item)}
                           </tr>
                        ))}
                     </tbody>
                  </table>
                  <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                     <div className="flex flex-1 justify-between sm:hidden">
                        <button
                           onClick={() => handlePageChange(currentPage - 1)}
                           disabled={currentPage === 1}
                           className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                           Previous
                        </button>
                        <button
                           onClick={() => handlePageChange(currentPage + 1)}
                           disabled={currentPage === getTotalPages()}
                           className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                           Next
                        </button>
                     </div>
                     <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                        <div>
                           <p className="text-sm text-gray-700">
                              Mostrando{" "}
                              <span className="font-medium">{numero}</span> a{" "}
                              <span className="font-medium">{numero2}</span> de{" "}
                              <span className="font-medium">
                                 {filteredData.length}
                              </span>{" "}
                              resultados
                           </p>
                        </div>
                        <div>
                           <nav
                              className="isolate inline-flex -space-x-px rounded-md"
                              aria-label="Pagination"
                           >
                              <button
                                 className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                 onClick={() =>
                                    handlePageChange(currentPage - 1)
                                 }
                                 disabled={currentPage === 1}
                              >
                                 <span className="sr-only">Previous</span>
                                 <ChevronLeftIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                 />
                              </button>
                              {Array.from(
                                 { length: getTotalPages() },
                                 (_, index) => {
                                    if (
                                       index < 3 ||
                                       index >= getTotalPages() - 3 ||
                                       (index >= currentPage - 2 &&
                                          index <= currentPage + 2)
                                    ) {
                                       return (
                                          <button
                                             key={index}
                                             onClick={() =>
                                                handlePageChange(index + 1)
                                             }
                                             className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold  ${
                                                currentPage === index + 1
                                                   ? "bg-blue-600 text-white "
                                                   : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                             }`}
                                          >
                                             {index + 1}
                                          </button>
                                       );
                                    } else if (
                                       index === 3 ||
                                       index === getTotalPages() - 4
                                    ) {
                                       return (
                                          <span
                                             className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
                                             key={index}
                                          >
                                             ...
                                          </span>
                                       );
                                    }
                                    return null;
                                 }
                              )}

                              <button
                                 className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                 onClick={() =>
                                    handlePageChange(currentPage + 1)
                                 }
                                 disabled={currentPage === getTotalPages()}
                              >
                                 <span className="sr-only">Next</span>
                                 <ChevronRightIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                 />
                              </button>
                           </nav>
                        </div>
                     </div>
                  </div>
                  <div className="hidden">
                     <label>
                        Mostrar{" "}
                        <select
                           value={limit}
                           onChange={(e) =>
                              handleLimitChange(Number(e.target.value))
                           }
                        >
                           <option value={2}>2</option>
                           <option value={20}>20</option>
                           <option value={50}>50</option>
                        </select>{" "}
                        elementos por página
                     </label>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ReactTable;
