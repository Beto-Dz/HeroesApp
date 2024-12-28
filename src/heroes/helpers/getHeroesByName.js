import { heros } from "../data/heros";

export const getHeroesByName = (name = "") => {
  name = name.trim().toLowerCase();

  if (name.length <= 0) return;

  // includes sobre una cadena busca x palabra dentro de una frase
  return heros.filter((hero) =>
    hero.superhero.toLocaleLowerCase().includes(name)
  );
};
