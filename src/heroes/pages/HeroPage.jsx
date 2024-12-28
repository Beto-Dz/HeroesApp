import { Navigate, useParams } from "react-router-dom"
import { getHeroesByID } from "../helpers/getHeroesByID";

export const HeroPage = () => {
  // uso de custom hook de react router para trabajar facilmente con los parametros
  const queryParams = useParams();

  // aqui deberiamos ver el id del heroe {hero_id}
  // console.log(queryParams)

  const hero = getHeroesByID(queryParams.hero_id);

  // si no hay un hero, redirige a /marvel
  if(!hero){
    return <Navigate to={'/marvel'} />
  }

  return (
    <pre>{JSON.stringify(hero, null, 2)}</pre>
  )
}
