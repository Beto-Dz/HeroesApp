import { heros } from "../data/heros";

export const getHeroesByPublisher = (publisher = "") => {
  // arreglo con los posibles publisers
  const publisers = ["Marvel Comics", "DC Comics"];

  if (!publisers.includes(publisher)) {
    throw new Error("El publisher no es válido");
  }

  // retorna los heroes del respectivo publicador
  return heros.filter(hero => hero.publisher === publisher)
};
