import usePersonSearch from "../../hooks/usePersonSearch";
import { useForm, FormProvider } from "react-hook-form";
import CelebCard from "../personCard/CelebCard";
import Loading from "../Loading/Loading";
import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const CelebsPage = () => {
  const { register, handleSubmit } = useForm();
  const [query, setQuery] = useState("John");
  const [page, setPage] = useState(1);
  const { data, loading, error } = usePersonSearch(query, page);

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

  return (
    <div className="dd">
      <div className="container">
        <h1>Celebrities</h1>
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
              placeholder="Search for celebrities..."
            />
            <button className="search-button" type="submit">
              Search
            </button>
          </form>
        </FormProvider>
        <Loading loading={loading} error={error}>
          <div className="row mt-3">
            {data?.results
              .filter((person) => person.profile_path)
              .map((person) => (
                <div key={person.id} className="col-lg-3 col-md-4 col-sm-6 ">
                  <CelebCard data={{ ...person, media_type: "person" }} />
                </div>
              ))}
          </div>
        </Loading>
        <Stack
          container="true"
          className="mb-2"
          spacing={2}
          alignItems="center"
        >
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

export default CelebsPage;
