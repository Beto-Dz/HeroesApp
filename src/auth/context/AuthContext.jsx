import { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

// estado inicial de la app
const initialState = {
  logged: false,
};

// creación de contexto
export const AuthContext = createContext();

// creación de proveedor de contexto
export const AuthContextProvider = ({ children }) => {
    // uso del reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
