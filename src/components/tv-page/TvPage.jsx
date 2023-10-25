import useTvSearch from "../../hooks/useTvSearch";
import { useForm, FormProvider } from "react-hook-form";
import MyCard from "../card/MyCard";
import Loading from "../Loading.jsx/Loading";
import { useState } from "react";

const TvPage = () => {
  const { register, handleSubmit } = useForm();
  const [query, setQuery] = useState("friends");
  const { data, loading, error } = useTvSearch(query);

  const onSubmit = (formData) => {
    setQuery(formData.query);
  };

  const tvList = data?.results
    ?.filter((tvShow) => tvShow.poster_path)
    .map((tvShow) => {
      const movieWithCustomType = { ...tvShow, media_type: "tv" };
      return (
        <div key={tvShow.id} className="col-lg-3 col-md-4 col-sm-6 ">
          <MyCard movie={movieWithCustomType} />
        </div>
      );
    });

  return (
    <div className="dd">
      <div className="container">
        <h1>Tv Shows </h1>
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
          <div className="row">{tvList}</div>
        </Loading>
      </div>
    </div>
  );
};

export default TvPage;
