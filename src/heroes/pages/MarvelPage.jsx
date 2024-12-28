import { HeroList } from "../components/HeroList"

export const MarvelPage = () => {
  return (
    <>
      <h1 className="text-center font-bold text-red-400 text-lg">Marvel Comics</h1>
      <hr />
      <HeroList publisher="Marvel Comics" />
    </>
  )
}
