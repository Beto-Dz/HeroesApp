import { Link, NavLink } from "react-router-dom";
import { EllipsisHorizontalIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export const Navbar = () => {
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
        </ul>
      </button>

      <button className="relative group/dots p-2">
        <EllipsisHorizontalIcon className="w-8 h-8" />
        <ul className="absolute right-full top-0 bg-slate-700 rounded-lg hidden group-hover/dots:block transition-all">
          <li className="p-3">
            <NavLink className="" to="/login">
              Logout
            </NavLink>
          </li>
        </ul>
      </button>
    </nav>
  );
};
