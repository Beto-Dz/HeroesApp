import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRoute } from "./PrivateRoute";

// router general de la app
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        {/* si tuviera mas rutas como register o recover password irian aqui */}
        {/* <Route path="/*" element={<HeroesRoutes />} /> */}
        {/* ahora le decimos que todo el router de heroes son privadas */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
