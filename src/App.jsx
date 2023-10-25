import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DrawerAppBar from "./components/header/DrawerAppBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import MoviesDetails from "./components/movie-details/MoviesDetails";
import MoviesPage from "./components/movies-page/MoviesPage";
import TvPage from "./components/tv-page/TvPage";
import CelebsPage from "./components/celebs-page/CelebsPage";

function App() {
  return (
    <Router>
      <DrawerAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page" element={<Home />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tv-shows" element={<TvPage />} />
        <Route path="/celebs" element={<CelebsPage />} />
        <Route path="/blog" element={<Home />} />
        <Route path="/movie-details/:type/:id" element={<MoviesDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
