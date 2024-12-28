import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroesByID } from "../helpers/getHeroesByID";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { useMemo } from "react";

export const HeroPage = () => {
  // uso de custom hook de react router para trabajar facilmente con los parametros
  const queryParams = useParams();

  // aqui deberiamos ver el id del heroe {hero_id}
  // console.log(queryParams)

  // resultado de funcion memorizada para evitar que si un componente padre cambia
  // entonces se evite volver a hacer una llamada a esta funcion
  const hero =  useMemo( () => getHeroesByID(queryParams.hero_id), [queryParams.hero_id]);

  // si no hay un hero, redirige a /marvel
  if(!hero){
    return <Navigate to={'/marvel'} />
  }

  // uso de custom hook de react dom para manejar la navegacion
  const navigate = useNavigate();

  //funcion de ayuda para volver a la ruta anterior de donde estamos actualmente
  const handleBackNavigate = () => {
    navigate(-1);
  }

  // desestructurando las propiedades de hero
  const {id, superhero, alter_ego, first_appearance, publisher , characters} = hero;

  // creacion de arreglo a partir de las separaciones por coma.
  const charactersSeparated = characters.split(",");

  return (
    <section>
      <button onClick={handleBackNavigate} className="p-2 bg-blue-500 rounded-lg font-semibold flex gap-2"><ArrowUturnLeftIcon className="w-5 h-5" /> Regresar</button>
       <article className="grid grid-cols-two-auto rounded-lg overflow-hidden gap-2 shadow-slate-300 shadow-sm transition-transform">
            <header className="bg-slate-700 w-32 rounded-r-lg overflow-hidden">
              <figure>
                <img src={`/assets/images/${id}.jpg`} alt={`imagen del superheroe ${superhero}`} className="object-cover" />
                <figcaption className="font-bold text-white text-center">
                  {superhero}
                </figcaption>
              </figure>
            </header>
            <section className="flex flex-col p-1 *:flex-1">
              <header>
                <h2 className={`font-bold ${publisher==='Marvel Comics' ? 'text-red-400' : 'text-sky-400'}`}>{publisher}</h2>
                <p><small className="text-slate-400">Nombre:</small> <br /> {alter_ego}</p>
                <p><small className="text-slate-400">Primer aparición:</small> <br /> {first_appearance}</p>
              </header>
              <footer className="flex flex-col">
                <small className="text-slate-400">Otros nombres:</small>
                <ul className="list-none flex flex-wrap gap-2">
                  {charactersSeparated?.map((character) => 
                    <li key={character} className="px-2 rounded-full bg-slate-600 text-white text-sm">
                      <small>{character}</small>
                    </li>
                  )}
                </ul>
              </footer>
            </section>
          </article>
    </section>
  )
}
