import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import useSearchQuery from "../../hooks/useSearchQuery";
import MyCard from "../card/MyCard";
import Loading from "../Loading/Loading";
import CelebCard from "../personCard/CelebCard";

export default function Movies() {
  const { register, watch, getValues } = useForm();
  const { type, query } = useParams();
  const { movies, loading, error } = useSearchQuery(type, query);

  const filteredMovies = movies.filter((movie) => {
    const isPerson = movie.media_type === "person" || type == "person";
    const hasProfilePath = movie.profile_path;
    const hasPosterPath = movie.poster_path;

    return (isPerson && hasProfilePath) || (!isPerson && hasPosterPath);
  });

  const movieList = filteredMovies.map((movie) => (
    <div key={movie.id} className="col-lg-3 col-md-4 col-sm-6">
      {movie.media_type === "person" || type == "person" ? (
        <CelebCard data={{ ...movie, media_type: "person" }} />
      ) : (
        <MyCard movie={movie} />
      )}
    </div>
  ));

  return (
    <>
      <section className="search_home">
        <form noValidate className="container ">
          <div className=" search_home_form">
            <button className="search_home_form_btn">
              <Link
                className="search_home_form_btn"
                to={`/search/${watch("type")}/${watch("searchQuery")}`}
              >
                <SearchIcon />
              </Link>
            </button>
            <input
              className="search_home_form_input"
              type="text"
              autoComplete="off"
              spellCheck="false"
              placeholder="Find movies tv shows documentary and more..."
              {...register("searchQuery")}
            />
          </div>
          <div className="selector">
            <div className="selector-logo">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <select defaultValue="multi" {...register("type")}>
              <option disabled hidden value="multi">
                Media Type
              </option>
              <option value="multi">All</option>
              <option value="movie">Movies</option>
              <option value="tv">Tv Shows</option>
              <option value="person">Person</option>
            </select>
          </div>
        </form>
      </section>
      <Loading loading={loading} error={error}>
        <div className="container mt-4">
          <div className="row ">{movieList}</div>
        </div>
      </Loading>
    </>
  );
}
