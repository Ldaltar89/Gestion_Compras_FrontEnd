import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PagesRouter from "../page/admin/router/PagesRouter";
import AuthRouter from "../page/auth/router/AuthRouter";
import { useAuthStore } from "../hooks";

const AppRouters = () => {
   const { status, checkAuthToken } = useAuthStore();

   useEffect(() => {
      checkAuthToken();
   }, []);

   if (status === "checking") {
      return <h3>Cargando...</h3>;
   }

   return (
      <Routes>
         {status === "not-authenticated" ? (
            <Route path="/auth/*" element={<AuthRouter />} />
         ) : (
            <Route path="/*" element={<PagesRouter />} />
         )}
         <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
   );
};

export default AppRouters;
