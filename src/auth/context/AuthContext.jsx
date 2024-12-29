import { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

// estado inicial de la app
const initialState = {
  logged: false,
};

// creación de contexto
export const AuthContext = createContext();

// creación de proveedor de contexto
export const AuthContextProvider = ({ children }) => {
  // uso del reducer
  const [authState, dispatch] = useReducer(authReducer, initialState);

  // funcion de ayuda para hacer el login
  const login = (user) => {
    // uso de types para no mandar el texto desde aqui y no tener
    // problemas con palabras mal escritas, el payload es mi name
    dispatch({ type: types.login, payload: user});
  };

  return (
    <AuthContext.Provider value={{ ...authState, handleLogin: login }}>
      {children}
    </AuthContext.Provider>
  );
};