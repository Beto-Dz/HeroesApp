import { heros } from "../data/heros";

export const getHeroesByID = (id) => {
  // validar que venga el id
  if (!id) throw new Error("Se necesita el id del heroe para buscarlo");

  // si no encuentra un hero con el id indicado, retorna un undefined
  return heros.find(hero => hero.id === id)

};
