import { Link } from "react-router-dom";

const Editar_Producto = () => {
  return (
    <div className="h-auto p-10 pt-20 md:ml-64">
      {/* <!-- component --> */}
      <h1 className="text-lg font-bold">Editar Producto</h1>
      <div className="my-2 mb-4 flex flex-col rounded bg-white px-8 pb-8 pt-6 shadow-md">
        <div className="-mx-3 mb-6 md:flex">
          <div className="mb-6 px-3 md:mb-0 md:w-1/2">
            <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
              Producto
            </label>
            <input
              className="bg-grey-lighter text-grey-darker border-red mb-3 block w-full appearance-none rounded border px-4 py-2 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
              id="grid-first-name"
              type="text"
              placeholder="Nombre del Producto"
            />
          </div>
          <div className="mb-6 px-3 md:mb-0 md:w-1/2">
            <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
              Proveedor
            </label>
            <div className="relative">
              <select
                className="bg-grey-lighter border-grey-lighter text-grey-darker block w-full appearance-none rounded border px-4 py-2 pr-8 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                id="grid-state"
              >
                <option value="">Seleccione el Proveedor</option>
                <option value="Paul Ortega">Paul Ortega - Coca Cola</option>
                <option value="Ernesto Guevara">
                  Ernesto Guevara - Inalecsa
                </option>
                <option value="Francisco Espinoza">
                  Francisco Espinoza - Rexona
                </option>
              </select>
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
          </div>
          <div className="mb-6 px-3 md:mb-0 md:w-1/2">
            <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
              Precio
            </label>
            <input
              className="bg-grey-lighter text-grey-darker border-grey-lighter block w-full appearance-none rounded border px-4 py-2 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
              id="grid-last-name"
              type="number"
              placeholder="Precio del Producto"
            />
          </div>
        </div>

        <div className="-mx-3 mb-6 md:flex">
          <div className="px-3 md:w-full">
            <label className=" text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
              Descripción
            </label>
            <textarea
              id="description"
              rows="5"
              className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 p-2.5 text-sm  text-gray-900 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500 "
              placeholder="Escriba una descripción..."
            ></textarea>
          </div>
        </div>
        <div className="-mx-3 mb-6 md:flex">
          <div className="px-3 md:w-full">
            <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
              Fecha de Elaboración
            </label>
            <input
              className="bg-grey-lighter text-grey-darker border-grey-lighter mb-3 block w-full appearance-none rounded border px-4 py-2 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
              id="grid-password"
              type="date"
              placeholder="Breve descripción del producto"
            />
          </div>
          <div className="px-3 md:w-full">
            <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
              Fecha de Caducidad
            </label>
            <input
              className="bg-grey-lighter text-grey-darker border-grey-lighter mb-3 block w-full appearance-none rounded border px-4 py-2 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
              id="grid-password"
              type="date"
              placeholder="Breve descripción del producto"
            />
          </div>
        </div>
        <div className="-mx-3 mb-2 md:flex">
          <div className="px-3 md:w-1/2">
            <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
              Marca
            </label>
            <div className="relative">
              <select
                className="bg-grey-lighter border-grey-lighter text-grey-darker block w-full appearance-none rounded border px-4 py-2 pr-8 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                id="grid-state"
              >
                <option value="">Seleccione la Marca</option>
                <option value="Coca Cola">Coca Cola</option>
                <option value="Inalecsa">Inalecsa</option>
                <option value="Rexona">Rexona</option>
              </select>
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
          </div>
          <div className="px-3 md:w-1/2 ">
            <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
              Categoria
            </label>
            <div className="relative">
              <select
                className="bg-grey-lighter border-grey-lighter text-grey-darker block w-full appearance-none rounded border px-4 py-2 pr-8 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                id="grid-state"
              >
                <option value="">Seleccione la Categoria</option>
                <option value="Bebidas">Bebidas</option>
                <option value="Snack">Snack</option>
                <option value="Cuidado Personal">Cuidado Personal</option>
              </select>
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
          </div>
          <div className="mb-6 px-3 md:mb-0 md:w-1/2">
            <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
              Lote
            </label>
            <input
              className="bg-grey-lighter text-grey-darker border-grey-lighter block w-full appearance-none rounded border px-4 py-2 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
              id="grid-city"
              type="text"
              placeholder="Escriba el Lote"
            />
          </div>
          <div className="mb-6 px-3 md:mb-0 md:w-1/2">
            <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
              Stock
            </label>
            <input
              className="bg-grey-lighter text-grey-darker border-grey-lighter block w-full appearance-none rounded border px-4 py-2 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
              id="grid-city"
              type="number"
              placeholder="Cantidad"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0 ">
        <Link
          to={"/producto"}
          className="flex items-center justify-center gap-2 rounded-lg border bg-gray-50 px-4 py-2 text-sm font-medium text-black hover:bg-gray-100"
        >
          <span>Cancelar</span>
        </Link>
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-lg bg-blue-800 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          <span>Actualizar</span>
        </button>
      </div>
    </div>
  );
};

export default Editar_Producto;
