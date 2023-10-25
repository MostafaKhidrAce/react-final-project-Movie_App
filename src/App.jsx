import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DrawerAppBar from "./components/header/DrawerAppBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import MoviesDetails from "./components/movie-details/MoviesDetails";

function App() {
  return (
    <Router>
      <DrawerAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page" element={<Home />} />
        <Route path="/movies" element={<Home />} />
        <Route path="/tv-shows" element={<Home />} />
        <Route path="/celebs" element={<Home />} />
        <Route path="/blog" element={<Home />} />
        <Route path="/movie-details/:type/:id" element={<MoviesDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
