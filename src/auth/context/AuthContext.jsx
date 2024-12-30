import { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

// estado inicial de la app
const initialState = () => {
  // recuperando el usuario del localStorage
  const user = JSON.parse(window.localStorage.getItem("user"));

  return {
    logged: !!user,
    user: user,
  };
};

// creación de contexto
export const AuthContext = createContext();

// creación de proveedor de contexto
export const AuthContextProvider = ({ children }) => {
  // uso del reducer
  const [authState, dispatch] = useReducer(authReducer, initialState());

  // funcion de ayuda para hacer el login
  const login = (user) => {
    // guardar en el localStorage el usuario
    window.localStorage.setItem("user", JSON.stringify(user));
    // uso de types para no mandar el texto desde aqui y no tener
    // problemas con palabras mal escritas, el payload es mi name
    dispatch({ type: types.login, payload: user });
  };

  //funcion de ayuda para cerrar sesion
  const logout = () => {
    // remover del local storage
    window.localStorage.removeItem('user')
    // hacer el dispatch al reducer
    dispatch({type: types.logout})
  }

  return (
    <AuthContext.Provider value={{ ...authState, handleLogin: login, handleLogout: logout }}>
      {children}
    </AuthContext.Provider>
  );
};
