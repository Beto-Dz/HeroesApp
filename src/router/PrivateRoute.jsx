import React, { useContext, useMemo } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

// componente para definir una ruta privada a partir de si existe un user
// puede acceder al contexto por que el context provider esta en App y envuelve toda la app
export const PrivateRoute = React.memo(({ children }) => {
  // usando el contexto
  const { logged } = useContext(AuthContext);

  // uso de custom hook para obtener la ruta actual
  const { pathname, search } = useLocation();

  // se guardara solo si esta logeado en la app
  if(logged){
    // obteniendo la ruta actual y enviando al localstorage
    const lastpath = pathname + search;
    localStorage.setItem('lastpath', lastpath);
  }

  // si esta autenticado retorna el children, si no redirige al login
  return logged ? children : <Navigate to="/login" />;
});