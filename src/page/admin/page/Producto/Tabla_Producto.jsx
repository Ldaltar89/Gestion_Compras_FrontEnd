import { RiAddFill, RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useProductoStore } from "../../../../hooks/useProductoStore";
import { useEffect } from "react";

const Tabla_Producto = () => {
   const { producto, status } = useSelector((state) => state.producto);

   const { startProducto, deleteProducto } = useProductoStore();

   useEffect(() => {
      startProducto();
   }, []);

   const handleDeleteProducto = (id) => {
      deleteProducto(id);
   };

   if (status === "Checking") {
      return (
         <div className="flex min-h-[50rem] items-center justify-center">
            <div className="text-center">
               <div role="status">
                  <svg
                     aria-hidden="true"
                     className="inline h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                     viewBox="0 0 100 101"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                     />
                     <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                     />
                  </svg>
                  <span className="sr-only">Loading...</span>
               </div>
            </div>
         </div>
      );
   }
   return (
      // <div className="h-auto p-4">
      //    <section className="">
      //       <div className="px-4 ">
      //          <h1 className="pb-3 text-lg font-bold">Productos</h1>
      //          <div className="relative overflow-hidden border bg-white shadow-md sm:rounded-lg">
      //             <div className="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0">
      //                <div className="w-full md:w-1/2">
      //                   <form className="flex items-center">
      //                      <label htmlFor="simple-search" className="sr-only">
      //                         Search
      //                      </label>
      //                      <div className="relative w-full">
      //                         <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      //                            <svg
      //                               aria-hidden="true"
      //                               className="h-5 w-5 text-gray-500 dark:text-gray-400"
      //                               fill="currentColor"
      //                               xmlns="http://www.w3.org/2000/svg"
      //                            >
      //                               <path
      //                                  fillRule="evenodd"
      //                                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
      //                                  clipRule="evenodd"
      //                               />
      //                            </svg>
      //                         </div>
      //                         <input
      //                            type="text"
      //                            id="simple-search"
      //                            className="block w-full rounded-lg border bg-gray-50 p-2 pl-10 text-sm text-gray-900 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
      //                            placeholder="Search"
      //                            required=""
      //                         />
      //                      </div>
      //                   </form>
      //                </div>
      //                <div className="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0 ">
      //                   <Link
      //                      to={"crear"}
      //                      className="flex items-center justify-center gap-2 rounded-lg bg-blue-800 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      //                   >
      //                      <RiAddFill size={20} />
      //                      <span>Añadir Producto</span>
      //                   </Link>
      //                </div>
      //             </div>
      //             <div className="overflow-x-auto">
      //                <table className="w-full text-left text-sm text-gray-500">
      //                   <thead className="bg-gray-100 text-xs uppercase text-gray-700">
      //                      <tr>
      //                         <th scope="col" className="px-4 py-3">
      //                            Producto
      //                         </th>
      //                         <th scope="col" className="px-4 py-3">
      //                            Categoria
      //                         </th>
      //                         <th scope="col" className="px-4 py-3">
      //                            Marca
      //                         </th>
      //                         <th scope="col" className="px-4 py-3">
      //                            Stock
      //                         </th>
      //                         <th scope="col" className="px-4 py-3">
      //                            Precio
      //                         </th>
      //                         <th scope="col" className="px-4 py-3">
      //                            <span className="sr-only">Actions</span>
      //                         </th>
      //                      </tr>
      //                   </thead>
      //                   <tbody>
      //                      <tr className="border-b dark:border-gray-700">
      //                         <th
      //                            scope="row"
      //                            className="whitespace-nowrap px-4 py-3 font-medium text-gray-900"
      //                         >
      //                            Apple iMac 27&#34;
      //                         </th>
      //                         <td className="px-4 py-3">PC</td>
      //                         <td className="px-4 py-3">Apple</td>
      //                         <td className="px-4 py-3">300</td>
      //                         <td className="px-4 py-3">$2999</td>
      //                         <td className="flex items-center justify-end px-4 py-3">
      //                            <Link
      //                               to={"editar/123"}
      //                               id="apple-imac-27-dropdown-button"
      //                               data-dropdown-toggle="apple-imac-27-dropdown"
      //                               className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
      //                            >
      //                               <svg
      //                                  className="h-5 w-5"
      //                                  aria-hidden="true"
      //                                  fill="currentColor"
      //                                  xmlns="http://www.w3.org/2000/svg"
      //                               >
      //                                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
      //                               </svg>
      //                            </Link>
      //                            <div
      //                               id="apple-imac-27-dropdown"
      //                               className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
      //                            >
      //                               <ul
      //                                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
      //                                  aria-labelledby="apple-imac-27-dropdown-button"
      //                               >
      //                                  <li>
      //                                     <a
      //                                        href="#"
      //                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      //                                     >
      //                                        Show
      //                                     </a>
      //                                  </li>
      //                                  <li>
      //                                     <a
      //                                        href="#"
      //                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      //                                     >
      //                                        Edit
      //                                     </a>
      //                                  </li>
      //                               </ul>
      //                               <div className="py-1">
      //                                  <a
      //                                     href="#"
      //                                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
      //                                  >
      //                                     Delete
      //                                  </a>
      //                               </div>
      //                            </div>
      //                         </td>
      //                      </tr>
      //                      <tr className="border-b dark:border-gray-700">
      //                         <th
      //                            scope="row"
      //                            className="whitespace-nowrap px-4 py-3 font-medium text-gray-900"
      //                         >
      //                            Apple iMac 20&#34;
      //                         </th>
      //                         <td className="px-4 py-3">PC</td>
      //                         <td className="px-4 py-3">Apple</td>
      //                         <td className="px-4 py-3">200</td>
      //                         <td className="px-4 py-3">$1499</td>
      //                         <td className="flex items-center justify-end px-4 py-3">
      //                            <button
      //                               id="apple-imac-20-dropdown-button"
      //                               data-dropdown-toggle="apple-imac-20-dropdown"
      //                               className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
      //                               type="button"
      //                            >
      //                               <svg
      //                                  className="h-5 w-5"
      //                                  aria-hidden="true"
      //                                  fill="currentColor"
      //                                  xmlns="http://www.w3.org/2000/svg"
      //                               >
      //                                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
      //                               </svg>
      //                            </button>
      //                            <div
      //                               id="apple-imac-20-dropdown"
      //                               className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
      //                            >
      //                               <ul
      //                                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
      //                                  aria-labelledby="apple-imac-20-dropdown-button"
      //                               >
      //                                  <li>
      //                                     <a
      //                                        href="#"
      //                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      //                                     >
      //                                        Show
      //                                     </a>
      //                                  </li>
      //                                  <li>
      //                                     <a
      //                                        href="#"
      //                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      //                                     >
      //                                        Edit
      //                                     </a>
      //                                  </li>
      //                               </ul>
      //                               <div className="py-1">
      //                                  <a
      //                                     href="#"
      //                                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
      //                                  >
      //                                     Delete
      //                                  </a>
      //                               </div>
      //                            </div>
      //                         </td>
      //                      </tr>
      //                      <tr className="border-b dark:border-gray-700">
      //                         <th
      //                            scope="row"
      //                            className="whitespace-nowrap px-4 py-3 font-medium text-gray-900"
      //                         >
      //                            Apple iPhone 14
      //                         </th>
      //                         <td className="px-4 py-3">Phone</td>
      //                         <td className="px-4 py-3">Apple</td>
      //                         <td className="px-4 py-3">1237</td>
      //                         <td className="px-4 py-3">$999</td>
      //                         <td className="flex items-center justify-end px-4 py-3">
      //                            <button
      //                               id="apple-iphone-14-dropdown-button"
      //                               data-dropdown-toggle="apple-iphone-14-dropdown"
      //                               className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
      //                               type="button"
      //                            >
      //                               <svg
      //                                  className="h-5 w-5"
      //                                  aria-hidden="true"
      //                                  fill="currentColor"
      //                                  xmlns="http://www.w3.org/2000/svg"
      //                               >
      //                                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
      //                               </svg>
      //                            </button>
      //                            <div
      //                               id="apple-iphone-14-dropdown"
      //                               className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
      //                            >
      //                               <ul
      //                                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
      //                                  aria-labelledby="apple-iphone-14-dropdown-button"
      //                               >
      //                                  <li>
      //                                     <a
      //                                        href="#"
      //                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      //                                     >
      //                                        Show
      //                                     </a>
      //                                  </li>
      //                                  <li>
      //                                     <a
      //                                        href="#"
      //                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      //                                     >
      //                                        Edit
      //                                     </a>
      //                                  </li>
      //                               </ul>
      //                               <div className="py-1">
      //                                  <a
      //                                     href="#"
      //                                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
      //                                  >
      //                                     Delete
      //                                  </a>
      //                               </div>
      //                            </div>
      //                         </td>
      //                      </tr>
      //                      <tr className="border-b dark:border-gray-700">
      //                         <th
      //                            scope="row"
      //                            className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 "
      //                         >
      //                            Apple iPad Air
      //                         </th>
      //                         <td className="px-4 py-3">Tablet</td>
      //                         <td className="px-4 py-3">Apple</td>
      //                         <td className="px-4 py-3">4578</td>
      //                         <td className="px-4 py-3">$1199</td>
      //                         <td className="flex items-center justify-end px-4 py-3">
      //                            <button
      //                               id="apple-ipad-air-dropdown-button"
      //                               data-dropdown-toggle="apple-ipad-air-dropdown"
      //                               className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
      //                               type="button"
      //                            >
      //                               <svg
      //                                  className="h-5 w-5"
      //                                  aria-hidden="true"
      //                                  fill="currentColor"
      //                                  xmlns="http://www.w3.org/2000/svg"
      //                               >
      //                                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
      //                               </svg>
      //                            </button>
      //                            <div
      //                               id="apple-ipad-air-dropdown"
      //                               className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
      //                            >
      //                               <ul
      //                                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
      //                                  aria-labelledby="apple-ipad-air-dropdown-button"
      //                               >
      //                                  <li>
      //                                     <a
      //                                        href="#"
      //                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      //                                     >
      //                                        Show
      //                                     </a>
      //                                  </li>
      //                                  <li>
      //                                     <a
      //                                        href="#"
      //                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      //                                     >
      //                                        Edit
      //                                     </a>
      //                                  </li>
      //                               </ul>
      //                               <div className="py-1">
      //                                  <a
      //                                     href="#"
      //                                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
      //                                  >
      //                                     Delete
      //                                  </a>
      //                               </div>
      //                            </div>
      //                         </td>
      //                      </tr>
      //                      <tr className="border-b dark:border-gray-700">
      //                         <th
      //                            scope="row"
      //                            className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 "
      //                         >
      //                            Xbox Series S
      //                         </th>
      //                         <td className="px-4 py-3">Gaming/Console</td>
      //                         <td className="px-4 py-3">Microsoft</td>
      //                         <td className="px-4 py-3">56</td>
      //                         <td className="px-4 py-3">$299</td>
      //                         <td className="flex items-center justify-end px-4 py-3">
      //                            <button
      //                               id="xbox-series-s-dropdown-button"
      //                               data-dropdown-toggle="xbox-series-s-dropdown"
      //                               className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
      //                               type="button"
      //                            >
      //                               <svg
      //                                  className="h-5 w-5"
      //                                  aria-hidden="true"
      //                                  fill="currentColor"
      //                                  xmlns="http://www.w3.org/2000/svg"
      //                               >
      //                                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
      //                               </svg>
      //                            </button>
      //                            <div
      //                               id="xbox-series-s-dropdown"
      //                               className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
      //                            >
      //                               <ul
      //                                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
      //                                  aria-labelledby="xbox-series-s-dropdown-button"
      //                               >
      //                                  <li>
      //                                     <a
      //                                        href="#"
      //                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      //                                     >
      //                                        Show
      //                                     </a>
      //                                  </li>
      //                                  <li>
      //                                     <a
      //                                        href="#"
      //                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      //                                     >
      //                                        Edit
      //                                     </a>
      //                                  </li>
      //                               </ul>
      //                               <div className="py-1">
      //                                  <a
      //                                     href="#"
      //                                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
      //                                  >
      //                                     Delete
      //                                  </a>
      //                               </div>
      //                            </div>
      //                         </td>
      //                      </tr>
      //                      <tr className="border-b dark:border-gray-700">
      //                         <th
      //                            scope="row"
      //                            className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 "
      //                         >
      //                            PlayStation 5
      //                         </th>
      //                         <td className="px-4 py-3">Gaming/Console</td>
      //                         <td className="px-4 py-3">Sony</td>
      //                         <td className="px-4 py-3">78</td>
      //                         <td className="px-4 py-3">$799</td>
      //                         <td className="flex items-center justify-end px-4 py-3">
      //                            <button
      //                               id="playstation-5-dropdown-button"
      //                               data-dropdown-toggle="playstation-5-dropdown"
      //                               className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
      //                               type="button"
      //                            >
      //                               <svg
      //                                  className="h-5 w-5"
      //                                  aria-hidden="true"
      //                                  fill="currentColor"
      //                                  xmlns="http://www.w3.org/2000/svg"
      //                               >
      //                                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
      //                               </svg>
      //                            </button>
      //                            <div
      //                               id="playstation-5-dropdown"
      //                               className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
      //                            >
      //                               <ul
      //                                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
      //                                  aria-labelledby="playstation-5-dropdown-button"
      //                               >
      //                                  <li>
      //                                     <a
      //                                        href="#"
      //                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      //                                     >
      //                                        Show
      //                                     </a>
      //                                  </li>
      //                                  <li>
      //                                     <a
      //                                        href="#"
      //                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      //                                     >
      //                                        Edit
      //                                     </a>
      //                                  </li>
      //                               </ul>
      //                               <div className="py-1">
      //                                  <a
      //                                     href="#"
      //                                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
      //                                  >
      //                                     Delete
      //                                  </a>
      //                               </div>
      //                            </div>
      //                         </td>
      //                      </tr>
      //                      <tr className="border-b dark:border-gray-700">
      //                         <th
      //                            scope="row"
      //                            className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 "
      //                         >
      //                            Xbox Series X
      //                         </th>
      //                         <td className="px-4 py-3">Gaming/Console</td>
      //                         <td className="px-4 py-3">Microsoft</td>
      //                         <td className="px-4 py-3">200</td>
      //                         <td className="px-4 py-3">$699</td>
      //                         <td className="flex items-center justify-end px-4 py-3">
      //                            <button
      //                               id="xbox-series-x-dropdown-button"
      //                               data-dropdown-toggle="xbox-series-x-dropdown"
      //                               className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
      //                               type="button"
      //                            >
      //                               <svg
      //                                  className="h-5 w-5"
      //                                  aria-hidden="true"
      //                                  fill="currentColor"
      //                                  xmlns="http://www.w3.org/2000/svg"
      //                               >
      //                                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
      //                               </svg>
      //                            </button>
      //                            <div
      //                               id="xbox-series-x-dropdown"
      //                               className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
      //                            >
      //                               <ul
      //                                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
      //                                  aria-labelledby="xbox-series-x-dropdown-button"
      //                               >
      //                                  <li>
      //                                     <a
      //                                        href="#"
      //                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      //                                     >
      //                                        Show
      //                                     </a>
      //                                  </li>
      //                                  <li>
      //                                     <a
      //                                        href="#"
      //                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      //                                     >
      //                                        Edit
      //                                     </a>
      //                                  </li>
      //                               </ul>
      //                               <div className="py-1">
      //                                  <a
      //                                     href="#"
      //                                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
      //                                  >
      //                                     Delete
      //                                  </a>
      //                               </div>
      //                            </div>
      //                         </td>
      //                      </tr>
      //                      <tr className="border-b dark:border-gray-700">
      //                         <th
      //                            scope="row"
      //                            className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 "
      //                         >
      //                            Apple Watch SE
      //                         </th>
      //                         <td className="px-4 py-3">Watch</td>
      //                         <td className="px-4 py-3">Apple</td>
      //                         <td className="px-4 py-3">657</td>
      //                         <td className="px-4 py-3">$399</td>
      //                         <td className="flex items-center justify-end px-4 py-3">
      //                            <button
      //                               id="apple-watch-se-dropdown-button"
      //                               data-dropdown-toggle="apple-watch-se-dropdown"
      //                               className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
      //                               type="button"
      //                            >
      //                               <svg
      //                                  className="h-5 w-5"
      //                                  aria-hidden="true"
      //                                  fill="currentColor"
      //                                  xmlns="http://www.w3.org/2000/svg"
      //                               >
      //                                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
      //                               </svg>
      //                            </button>
      //                            <div
      //                               id="apple-watch-se-dropdown"
      //                               className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
      //                            >
      //                               <ul
      //                                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
      //                                  aria-labelledby="apple-watch-se-dropdown-button"
      //                               >
      //                                  <li>
      //                                     <a
      //                                        href="#"
      //                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      //                                     >
      //                                        Show
      //                                     </a>
      //                                  </li>
      //                                  <li>
      //                                     <a
      //                                        href="#"
      //                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      //                                     >
      //                                        Edit
      //                                     </a>
      //                                  </li>
      //                               </ul>
      //                               <div className="py-1">
      //                                  <a
      //                                     href="#"
      //                                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
      //                                  >
      //                                     Delete
      //                                  </a>
      //                               </div>
      //                            </div>
      //                         </td>
      //                      </tr>
      //                      <tr className="border-b dark:border-gray-700">
      //                         <th
      //                            scope="row"
      //                            className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 "
      //                         >
      //                            NIKON D850
      //                         </th>
      //                         <td className="px-4 py-3">Photo</td>
      //                         <td className="px-4 py-3">Nikon</td>
      //                         <td className="px-4 py-3">465</td>
      //                         <td className="px-4 py-3">$599</td>
      //                         <td className="flex items-center justify-end px-4 py-3">
      //                            <button
      //                               id="nikon-d850-dropdown-button"
      //                               data-dropdown-toggle="nikon-d850-dropdown"
      //                               className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
      //                               type="button"
      //                            >
      //                               <svg
      //                                  className="h-5 w-5"
      //                                  aria-hidden="true"
      //                                  fill="currentColor"
      //                                  xmlns="http://www.w3.org/2000/svg"
      //                               >
      //                                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
      //                               </svg>
      //                            </button>
      //                            <div
      //                               id="nikon-d850-dropdown"
      //                               className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
      //                            >
      //                               <ul
      //                                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
      //                                  aria-labelledby="nikon-d850-dropdown-button"
      //                               >
      //                                  <li>
      //                                     <a
      //                                        href="#"
      //                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      //                                     >
      //                                        Show
      //                                     </a>
      //                                  </li>
      //                                  <li>
      //                                     <a
      //                                        href="#"
      //                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      //                                     >
      //                                        Edit
      //                                     </a>
      //                                  </li>
      //                               </ul>
      //                               <div className="py-1">
      //                                  <a
      //                                     href="#"
      //                                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
      //                                  >
      //                                     Delete
      //                                  </a>
      //                               </div>
      //                            </div>
      //                         </td>
      //                      </tr>
      //                      <tr className="border-b dark:border-gray-700">
      //                         <th
      //                            scope="row"
      //                            className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 "
      //                         >
      //                            Monitor BenQ EX2710Q
      //                         </th>
      //                         <td className="px-4 py-3">TV/Monitor</td>
      //                         <td className="px-4 py-3">BenQ</td>
      //                         <td className="px-4 py-3">354</td>
      //                         <td className="px-4 py-3">$499</td>
      //                         <td className="flex items-center justify-end px-4 py-3">
      //                            <button
      //                               id="benq-ex2710q-dropdown-button"
      //                               data-dropdown-toggle="benq-ex2710q-dropdown"
      //                               className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
      //                               type="button"
      //                            >
      //                               <svg
      //                                  className="h-5 w-5"
      //                                  aria-hidden="true"
      //                                  fill="currentColor"
      //                                  xmlns="http://www.w3.org/2000/svg"
      //                               >
      //                                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
      //                               </svg>
      //                            </button>
      //                            <div
      //                               id="benq-ex2710q-dropdown"
      //                               className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
      //                            >
      //                               <ul
      //                                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
      //                                  aria-labelledby="benq-ex2710q-dropdown-button"
      //                               >
      //                                  <li>
      //                                     <a
      //                                        href="#"
      //                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      //                                     >
      //                                        Show
      //                                     </a>
      //                                  </li>
      //                                  <li>
      //                                     <a
      //                                        href="#"
      //                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      //                                     >
      //                                        Edit
      //                                     </a>
      //                                  </li>
      //                               </ul>
      //                               <div className="py-1">
      //                                  <a
      //                                     href="#"
      //                                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
      //                                  >
      //                                     Delete
      //                                  </a>
      //                               </div>
      //                            </div>
      //                         </td>
      //                      </tr>
      //                   </tbody>
      //                </table>
      //             </div>
      //             <nav
      //                className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0"
      //                aria-label="Table navigation"
      //             >
      //                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
      //                   Showing
      //                   <span className="font-semibold text-gray-900 ">
      //                      {" "}
      //                      1-10{" "}
      //                   </span>
      //                   of
      //                   <span className="font-semibold text-gray-900 ">
      //                      {" "}
      //                      1000{" "}
      //                   </span>
      //                </span>
      //                <ul className="inline-flex items-stretch -space-x-px">
      //                   <li>
      //                      <a
      //                         href="#"
      //                         className="ml-0 flex h-full items-center justify-center rounded-l-lg border border-gray-300 bg-white px-3 py-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700 "
      //                      >
      //                         <span className="sr-only">Previous</span>
      //                         <svg
      //                            className="h-5 w-5"
      //                            aria-hidden="true"
      //                            fill="currentColor"
      //                            xmlns="http://www.w3.org/2000/svg"
      //                         >
      //                            <path
      //                               fillRule="evenodd"
      //                               d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
      //                               clipRule="evenodd"
      //                            />
      //                         </svg>
      //                      </a>
      //                   </li>
      //                   <li>
      //                      <a
      //                         href="#"
      //                         className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 "
      //                      >
      //                         1
      //                      </a>
      //                   </li>
      //                   <li>
      //                      <a
      //                         href="#"
      //                         className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 "
      //                      >
      //                         2
      //                      </a>
      //                   </li>
      //                   <li>
      //                      <a
      //                         href="#"
      //                         aria-current="page"
      //                         className="text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 z-10 flex items-center justify-center border px-3 py-2 text-sm leading-tight "
      //                      >
      //                         3
      //                      </a>
      //                   </li>
      //                   <li>
      //                      <a
      //                         href="#"
      //                         className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 "
      //                      >
      //                         ...
      //                      </a>
      //                   </li>
      //                   <li>
      //                      <a
      //                         href="#"
      //                         className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 "
      //                      >
      //                         100
      //                      </a>
      //                   </li>
      //                   <li>
      //                      <a
      //                         href="#"
      //                         className="flex h-full items-center justify-center rounded-r-lg border border-gray-300 bg-white px-3 py-1.5 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 "
      //                      >
      //                         <span className="sr-only">Next</span>
      //                         <svg
      //                            className="h-5 w-5"
      //                            aria-hidden="true"
      //                            fill="currentColor"
      //                            xmlns="http://www.w3.org/2000/svg"
      //                         >
      //                            <path
      //                               fillRule="evenodd"
      //                               d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      //                               clipRule="evenodd"
      //                            />
      //                         </svg>
      //                      </a>
      //                   </li>
      //                </ul>
      //             </nav>
      //          </div>
      //       </div>
      //    </section>
      // </div>

      <div className="px-4 py-8 sm:px-6 lg:px-8">
         <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
               <h1 className="text-2xl font-semibold leading-6 text-gray-900">
                  Listado de Productossssssssss
               </h1>
               <p className="mt-2 text-sm text-gray-700">
                  A list of all the users in your account including their name,
                  title, email and role.
               </p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
               <Link
                  to={"/producto/crear"}
                  className="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
               >
                  Añadir Producto
               </Link>
            </div>
         </div>
         <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
               <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                     <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-gray-50">
                           <tr>
                              <th
                                 scope="col"
                                 className="whitespace-nowrap py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6"
                              >
                                 Producto
                              </th>
                              <th
                                 scope="col"
                                 className="whitespace-nowrappx-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                              >
                                 Proveedor
                              </th>
                              <th
                                 scope="col"
                                 className="whitespace-nowrap px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                              >
                                 Marca
                              </th>
                              <th
                                 scope="col"
                                 className="whitespace-nowrap px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                              >
                                 Categoria
                              </th>
                              <th
                                 scope="col"
                                 className="whitespace-nowrap px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                              >
                                 Precio
                              </th>
                              <th
                                 scope="col"
                                 className="whitespace-nowrap px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                              >
                                 Fecha de Elaboración
                              </th>
                              <th
                                 scope="col"
                                 className="whitespace-nowrap px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                              >
                                 Fecha de Caducación
                              </th>
                              <th
                                 scope="col"
                                 className="whitespace-nowrap px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                              >
                                 Stock
                              </th>
                              <th
                                 scope="col"
                                 className="whitespace-nowrap px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                              >
                                 Accion
                              </th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                           {producto.map((items, i) => (
                              <tr key={i}>
                                 <td className="whitespace-nowrap py-4 pl-4 pr-3 text-center text-sm font-medium text-gray-900 sm:pl-6">
                                    {items.producto}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                                    {items.proveedor.nombres}{" "}
                                    {items.proveedor.apellidos}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                                    {items.marca.nombre}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                                    {items.categoria.nombre}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                                    {items.precio}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                                    {items.fecha_elaboracion.split("T")[0]}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                                    {items.fecha_caducacion.split("T")[0]}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                                    {items.stock}
                                 </td>
                                 <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-center text-sm font-medium sm:pr-6">
                                    <button
                                       type="button"
                                       className="inline-flex items-center gap-x-1.5 rounded-md bg-red-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
                                       onClick={() =>
                                          handleDeleteProducto(items._id)
                                       }
                                    >
                                       <RiDeleteBin6Line
                                          className="-ml-0.5 h-5 w-5"
                                          aria-hidden="true"
                                       />
                                    </button>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Tabla_Producto;
