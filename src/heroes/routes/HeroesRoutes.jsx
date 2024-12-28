import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { MarvelPage } from "../pages/MarvelPage";
import { DcPage } from "../pages/DcPage";
import { SearchPage } from "../pages/SearchPage";
import { HeroPage } from "../pages/HeroPage";

// componente para las rutas de los heroes
export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto bg-red-300">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero" element={<HeroPage />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </main>
    </>
  );
};
