import { Link } from "react-router-dom";
import "./card.css";
const MyCard = ({ movie }) => {
  return (
    <>
      <div className="my_card">
        <span className="movie-rate">{movie?.vote_average?.toFixed(1)}</span>
        <figure className="movie-img">
          <Link to={`/movie-details/${movie.media_type}/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              title={movie.title}
            />
          </Link>
          <h5 className="movie-title">{movie.title || movie.original_name}</h5>
        </figure>
      </div>
    </>
  );
};

export default MyCard;
