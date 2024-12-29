import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  // uso de contexto
  const { logged } = useContext(AuthContext);

  // si esta logeado, entonces redirecciona a marvel
  return logged ? <Navigate to="/marvel" /> : children;
};
