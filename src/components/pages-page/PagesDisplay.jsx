import MyCard from "../card/MyCard";
import usePagesAllData from "../../hooks/usePagesAllData";
import Loading from "../Loading/Loading";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import "./PagesDisplay.css";

const PagesDisplay = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = usePagesAllData(page);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const [mediaTypeFilter, setMediaTypeFilter] = useState("all");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const filteredData = data.filter((item) => {
    if (mediaTypeFilter === "all") {
      return true;
    } else {
      return item.media_type === mediaTypeFilter;
    }
  });

  const movieList = filteredData.map((movie) => {
    return (
      <div key={movie.id} className="col-lg-3 col-md-4 col-sm-6 ">
        <MyCard movie={movie} />
      </div>
    );
  });

  return (
    <>
      <div className="container">
        <h2 className="trending_section_title">Latest Movies & Tv Shows</h2>
        <div className="filter-container">
          <label htmlFor="mediaTypeFilter" className="filter-label">
            Filter by Media Type:
          </label>
          <select
            id="mediaTypeFilter"
            value={mediaTypeFilter}
            onChange={(event) => setMediaTypeFilter(event.target.value)}
            className="filter-select"
          >
            <option value="all">All</option>
            <option value="movie">Movies</option>
            <option value="tv">TV Shows</option>
          </select>
        </div>
        <Loading loading={loading} error={error}>
          <div className="row">{movieList}</div>
        </Loading>
        <Stack container="true" spacing={2} alignItems="center">
          <Pagination count={500} page={page} onChange={handleChange} />
        </Stack>
      </div>
    </>
  );
};

export default PagesDisplay;
