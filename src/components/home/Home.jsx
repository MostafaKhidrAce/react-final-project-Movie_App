import { useForm } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";
import TrendingSection from "./TrendingSection";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <section className="search_home">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="container "
        >
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
              <option value="tv-show">Tv Shows</option>
              <option value="person">Person</option>
            </select>
          </div>
        </form>
      </section>
      <TrendingSection />
    </>
  );
};

export default Home;
