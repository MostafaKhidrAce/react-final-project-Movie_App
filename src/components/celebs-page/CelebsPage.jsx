import usePersonSearch from "../../hooks/usePersonSearch";
import { useForm, FormProvider } from "react-hook-form";
import CelebCard from "../personCard/CelebCard";
import Loading from "../Loading.jsx/Loading";
import { useState } from "react";

const CelebsPage = () => {
  const { register, handleSubmit } = useForm();
  const [query, setQuery] = useState("co");
  const { data, loading, error } = usePersonSearch(query);

  const onSubmit = (formData) => {
    setQuery(formData.query);
  };

  const personList = data?.results
    .filter((person) => person.profile_path)
    .map((person) => {
      const personWithCustomType = { ...person, media_type: "person" };
      return (
        <div key={person.id} className="col-lg-3 col-md-4 col-sm-6 ">
          <CelebCard data={personWithCustomType} />
        </div>
      );
    });
  console.log(data);

  return (
    <div className="dd">
      <div className="container">
        <h1>Celebrities </h1>
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
          <div className="row mt-3">{personList}</div>
        </Loading>
      </div>
    </div>
  );
};

export default CelebsPage;
