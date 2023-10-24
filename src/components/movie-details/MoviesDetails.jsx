import { useParams } from "react-router-dom";
import useMoviesDetails from "../../hooks/useMoviesDetails";
import Loading from "../Loading.jsx/Loading";
import "./moviesDetails.css";

const MoviesDetails = () => {
  const { id, type } = useParams();
  const apiKey = "14bdd69ce887376edfafb09f23f78fe9";
  const apiUrl = `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`;
  const { data, error, loading } = useMoviesDetails(apiUrl);

  return (
    <div className="Movies_details">
      <Loading loading={loading} error={error}>
        any
      </Loading>
    </div>
  );
};

export default MoviesDetails;
