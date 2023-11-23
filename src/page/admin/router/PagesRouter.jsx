import Layout from "../layout/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import Tabla_Producto from "../page/Producto/Tabla_Producto";
import Crear_Producto from "../page/Producto/Crear_Producto";
import Editar_Producto from "../page/Producto/Editar_Producto";
import Tabla_Proveedor from "../page/Proveedor/Tabla_Proveedor";
import Crear_Proveedor from "../page/Proveedor/Crear_Proveedor";
import Editar_Proveedor from "../page/Proveedor/Editar_Proveedor";
import Crear_Usuario from "../page/Usuario/Crear_Usuario";
import Tabla_Usuario from "../page/Usuario/Tabla_Usuario";

const PagesRouter = () => {
   return (
      <Layout>
         <Routes>
            <Route path="/producto" element={<Tabla_Producto />} />
            <Route path="/producto/crear" element={<Crear_Producto />} />
            <Route path="/producto/editar/:id" element={<Editar_Producto />} />
            <Route path="/proveedor" element={<Tabla_Proveedor />} />
            <Route path="/proveedor/crear" element={<Crear_Proveedor />} />
            <Route
               path="/proveedor/editar/:id"
               element={<Editar_Proveedor />}
            />
            <Route path="/usuario/crear" element={<Crear_Usuario />} />
            <Route path="/usuario" element={<Tabla_Usuario />} />
            <Route path="/*" element={<Navigate to="/producto" />} />
         </Routes>
      </Layout>
   );
};

export default PagesRouter;
