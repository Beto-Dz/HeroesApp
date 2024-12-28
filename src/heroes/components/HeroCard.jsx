import { Link } from "react-router-dom";

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance }) => {
  // imagen url
  const image = `/assets/images/${id}.jpg`;

  return (
    <article className="grid grid-cols-two-auto rounded-lg overflow-hidden gap-2 shadow-slate-300 shadow-sm transition-transform">
      <header className="bg-slate-700 w-32 rounded-r-lg overflow-hidden">
        <figure>
          <img src={image} alt={`imagen del superheroe ${superhero}`} className="object-cover" />
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
          <Link to={`/hero/${id}`} className="text-cyan-800 bg-cyan-100 rounded-full w-fit py-0 px-3 font-semibold hover:outline-slate-700 hover:outline">Ver más...</Link>
        </footer>
      </section>
    </article>
  );
};
