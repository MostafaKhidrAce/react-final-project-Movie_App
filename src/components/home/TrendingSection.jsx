import MyCard from "../card/MyCard";
import useMoveiesTrending from "../../hooks/useMoveiesTrending";
import "./home.css";
import Loading from "../Loading.jsx/Loading";

const TrendingSection = () => {
  const apiKey = "14bdd69ce887376edfafb09f23f78fe9";
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`;

  const { data, loading, error } = useMoveiesTrending(url);

  const movieList = data.map((movie) => {
    return (
      <div key={movie.id} className="col-lg-3 col-md-4 col-sm-6 ">
        <MyCard movie={movie} />
      </div>
    );
  });

  return (
    <section className="trending_section">
      <div className="container">
        <h2 className="trending_section_title">Latest Movies & Tv Shows</h2>
        <Loading loading={loading} error={error}>
          <div className="row">{movieList}</div>
        </Loading>
      </div>
    </section>
  );
};

export default TrendingSection;
