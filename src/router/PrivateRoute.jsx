import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate } from "react-router-dom";

// componente para definir una ruta privada a partir de si existe un user
// puede acceder al contexto por que el context provider esta en App y envuelve toda la app
export const PrivateRoute = ({ children }) => {
  // usando el contexto
  const { logged } = useContext(AuthContext);

  // si esta autenticado retorna el children, si no redirige al login
  return logged ? children : <Navigate to="/login" />;
};
