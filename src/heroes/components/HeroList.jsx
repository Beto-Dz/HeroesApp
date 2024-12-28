import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher = "" }) => {
  // usando el helper para filtrar los heroes por el publicador
  // resultado de funcion memorizada para evitar que si un componente padre cambia
  // entonces se evite volver a hacer una llamada a esta funcion
  const heroes = useMemo( () => getHeroesByPublisher(publisher), [publisher]);

  if (!heroes) return null;

  return(
    <ul className="grid grid-cols-template-auto gap-2">
        {
            heroes.map(hero => (
              <li>
                <HeroCard key={hero.id} {...hero} />
              </li>
            ))
        }
    </ul>
  )
};
