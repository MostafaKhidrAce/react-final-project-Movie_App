import React, { useState } from "react";
import useMovieSearch from "../../hooks/useMovieSearch";
import { useForm, FormProvider } from "react-hook-form";
import MyCard from "../card/MyCard";
import Loading from "../Loading.jsx/Loading";
import "./movies.css";

const MoviesPage = () => {
  const { register, handleSubmit } = useForm();
  const [query, setQuery] = useState("movies");
  const { data, loading, error } = useMovieSearch(query);

  const onSubmit = (formData) => {
    setQuery(formData.query);
  };

  const movieList = data?.results
    ?.filter((movie) => movie.poster_path)
    .map((movie) => {
      const movieWithCustomType = { ...movie, media_type: "movie" };
      return (
        <div key={movie.id} className="col-lg-3 col-md-4 col-sm-6 ">
          <MyCard movie={movieWithCustomType} />
        </div>
      );
    });

  return (
    <div className="dd">
      <div className="container">
        <h1>Movies </h1>
        <FormProvider {...register}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="search-form-movies"
          >
            <input
              className="search-input"
              type="text"
              autoComplete="off"
              spellCheck="false"
              {...register("query")}
              placeholder="Search for movies..."
            />
            <button className="search-button" type="submit">
              Search
            </button>
          </form>
        </FormProvider>
        <Loading loading={loading} error={error}>
          <div className="row">{movieList}</div>
        </Loading>
      </div>
    </div>
  );
};

export default MoviesPage;
