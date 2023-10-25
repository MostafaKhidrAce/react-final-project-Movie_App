import { useState } from "react";
import { useForm } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";
import PagesDisplay from "./PagesDisplay";

const Pages = () => {
  const { register, handleSubmit } = useForm();
  const [searchQuery, setSearchQuery] = useState("");

  const onSubmit = (data) => {
    setSearchQuery(data.searchQuarry);
  };

  return (
    <>
      <section className="search_home">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="container"
        >
          <div className="search_home_form">
            <button type="submit" className="search_home_form_btn">
              <SearchIcon />
            </button>
            <input
              className="search_home_form_input"
              type="text"
              autoComplete="off"
              spellCheck="false"
              placeholder="Find movies tv shows documentary and more..."
              {...register("searchQuarry")}
            />
          </div>
          <div className="selector">
            <div className="selector-logo">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <select defaultValue="all" {...register("mediaType")}>
              <option disabled hidden value="all">
                Media Type
              </option>
              <option value="all">All</option>
              <option value="movie">Movies</option>
              <option value="tv-show">Tv Shows</option>
              <option value="person">Person</option>
            </select>
          </div>
        </form>
      </section>
      <PagesDisplay />
    </>
  );
};

export default Pages;
