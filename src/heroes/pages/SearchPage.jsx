import { useLocation, useNavigate } from "react-router-dom";
import { SearchComponent } from "../components/SearchComponent";
import queryString from "query-string";
import { getHeroesByName } from "../helpers/getHeroesByName";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {
  // uso de custom hook para manejar la navegación
  const navigate = useNavigate();

  // hook para obtener manejar el location
  const { search } = useLocation();

  // uso de libreria externa para parsear la cadena del search en un objeto
  const { q = '' } = queryString.parse(search);

  let heroes = null;

  if(q){
    // heroes filtrados de acuerdo al nombre
    heroes = getHeroesByName(q);
  }

  const showSearchHero = (!q || q.length <= 0);
  const showError = (!heroes || heroes?.length <= 0);
  const showList = (heroes && heroes?.length > 0);

  return (
    <section className="p-2 grid md:grid-cols-2 gap-3">
      <section>
        <h1 className="font-bold text-lg">Busqueda de heroes</h1>
        <SearchComponent navigate={navigate} firsValue={q} />
      </section>
      <section>
        <h1 className="font-bold text-lg">Resultados</h1>
        <section className="border-t border-blue-200 border">
          {
            showSearchHero && <p className="p-2 rounded-lg bg-sky-400">Busca un heroe</p>
            ||
            showError && <p className="p-2 rounded-lg bg-red-400">No se han encontrado heroes: {`"${q}"`}</p>
            ||
            showList && (
              <ul className="grid grid-cols-template-auto gap-2">
                {heroes.map((hero) => (
                  <li>
                    <HeroCard key={hero.id} {...hero} />
                  </li>
                ))}
              </ul>
            )
          }
        </section>
      </section>
    </section>
  );
};
