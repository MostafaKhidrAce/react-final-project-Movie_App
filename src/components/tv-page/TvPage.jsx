import useTvSearch from "../../hooks/useTvSearch";
import { useForm, FormProvider } from "react-hook-form";
import MyCard from "../card/MyCard";
import Loading from "../Loading/Loading";
import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const TvPage = () => {
  const [page, setPage] = useState(1);
  const { register, handleSubmit } = useForm();
  const [query, setQuery] = useState("friends");
  const { data, loading, error } = useTvSearch(query, page);

  const onSubmit = (formData) => {
    setQuery(formData.query);
    setPage(1);
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

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
        <Stack container="true" spacing={2} alignItems="center">
          <Pagination
            count={data?.total_pages || 1}
            page={page}
            onChange={handleChange}
          />
        </Stack>
      </div>
    </div>
  );
};

export default TvPage;
