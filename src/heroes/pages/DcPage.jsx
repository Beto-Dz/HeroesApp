import { HeroList } from "../components/HeroList"

export const DcPage = () => {
  return (
    <>
      <h1 className="text-center font-bold text-sky-400 text-lg">DC Comics</h1>
      <hr />
      <HeroList  publisher="DC Comics" />
    </>
  )
}
