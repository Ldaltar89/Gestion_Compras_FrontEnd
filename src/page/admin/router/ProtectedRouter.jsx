/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Error404 from "../page/Error404";

const ProtectedRouter = ({ allowedRoles }) => {
   const { user, status } = useSelector((state) => state.auth);
   let validateRol = user.rol === allowedRoles[0] ? true : false;

   if (status === "Checking") {
      return <h3>Cargando...</h3>;
   }

   return validateRol ? <Outlet /> : <Error404 />;
};

export default ProtectedRouter;
