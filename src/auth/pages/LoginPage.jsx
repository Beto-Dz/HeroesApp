import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  // accediendo al contexto para objener la funcion de login
  const { handleLogin } = useContext(AuthContext);

  // custom hook de react dom para manejar la navegacion
  const navigate = useNavigate();

  // funcion de ayuda para manejar el inicio de sesion
  const handleOnLogin = () => {

    handleLogin({id: 1, name: 'Humberto De La Cruz'})

    // indicamos primero la ruta y si se reemplazará el historial
    navigate('/marvel', {
      replace: true
    })
  }

  return (
    <section className="bg-slate-700 w-full h-full grid place-content-center text-center text-white gap-2">
      <h2 className="font-bold">Login page</h2>
      <button className="p-2 bg-slate-500 rounded-lg" onClick={handleOnLogin}>Iniciar sesión</button>
    </section>
  );
};
