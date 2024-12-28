import { Link, NavLink, useNavigate } from "react-router-dom";
import { EllipsisHorizontalIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export const Navbar = () => {

  // custom hook de react router para manejar la navegacion
  const navigate = useNavigate();

  // funcion de ayuda para cerrar sesion
  const handleOnLogout = () => {
    // primero indicamos la ruta a la cual vamos a navegar
    // en segundo indicamos si se reemplaza el historial
    navigate('/login', {
      replace: true
    })
  }

  return (
    <nav className="w-full p-2 text-white flex justify-between items-center text-center bg-slate-800 font-bold">
      <Link to="/">Asociaciones</Link>

      <button className="group/heroes relative p-1">
        <span className="flex gap-2 items-center">Heroes <ChevronDownIcon className="h-4 w-4 group-hover/heroes:rotate-180"/> </span>
        <ul className="absolute left-0 p-2 flex flex-col gap-4 bg-slate-700 rounded-lg invisible group-hover/heroes:visible transition-all">
          <li className="hover:text-red-400 w-full h-fit">
            <NavLink to="/marvel" className={({ isActive })=> `block w-full h-full p-1 rounded-lg ${isActive ? 'bg-slate-800' : ''}`}>
              Marvel
            </NavLink>
          </li>
          <li className="hover:text-sky-400 w-full h-fit">
            <NavLink to="/dc" className={({ isActive })=> `block w-full h-full p-1 rounded-lg ${isActive ? 'bg-slate-800' : ''}`}>
              DC
            </NavLink>
          </li>
          <li className="w-full h-fit">
            <NavLink to="/search" className={({ isActive })=> `block w-full h-full p-1 rounded-lg ${isActive ? 'bg-slate-800' : ''}`}>
              Buscar
            </NavLink>
          </li>
          <li className="w-full h-fit">
            <NavLink to="/hero" className={({ isActive })=> `block w-full h-full p-1 rounded-lg ${isActive ? 'bg-slate-800' : ''}`}>
              Heroe
            </NavLink>
          </li>
        </ul>
      </button>

      <button className="relative group/dots p-2">
        <EllipsisHorizontalIcon className="w-8 h-8" />
        <ul className="absolute right-full top-0 bg-slate-700 rounded-lg hidden group-hover/dots:block transition-all">
          <li className="p-3">
            <button onClick={handleOnLogout}>
              Logout
            </button>
          </li>
        </ul>
      </button>

    </nav>
  );
};