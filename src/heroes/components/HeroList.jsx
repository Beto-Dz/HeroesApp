import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher = "" }) => {
  // usando el helper para filtrar los heroes por el publicador
  const heroes = getHeroesByPublisher(publisher);

  if (!heroes) return null;

  return(
    <ul className="grid grid-cols-template-auto gap-2">
        {
            heroes.map(hero => (
                <HeroCard key={hero.id} {...hero} />
            ))
        }
    </ul>
  )
};
