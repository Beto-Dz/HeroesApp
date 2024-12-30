import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { MarvelPage } from "../pages/MarvelPage";
import { DcPage } from "../pages/DcPage";
import { SearchPage } from "../pages/SearchPage";
import { HeroPage } from "../pages/HeroPage";
import { Companies } from "../pages/Companies";

// componente para las rutas de los heroes
export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <main className="container p-2 mx-auto">
        <Routes>
          <Route path="/companies" element={<Companies />} />
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:hero_id" element={<HeroPage />} />
          <Route path="/*" element={<Navigate to="/companies" />} />
        </Routes>
      </main>
    </>
  );
};
