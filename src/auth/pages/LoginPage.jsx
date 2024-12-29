import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  // custom hook de react dom para manejar la navegacion
  const navigate = useNavigate();

  // funcion de ayuda para manejar el inicio de sesion
  const handleOnLogin = () => {
    // indicamos primero la ruta y si se reemplazará el historial
    navigate('/marvel', {
      replace: true
    })
  }

  return (
    <section>
      <h2>Login</h2>
      <hr />
      <button onClick={handleOnLogin}>Iniciar sesión</button>
    </section>
  );
};
