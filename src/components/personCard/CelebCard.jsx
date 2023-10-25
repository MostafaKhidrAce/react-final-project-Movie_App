import "./celeb.css";

const CelebsPage = ({ data }) => {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w300${data?.known_for[0]?.poster_path} `}
        alt={data?.known_for[0]?.title}
      />
      <div>
        <h2>{data?.name || data?.original_name}</h2>
        <h4 className="per_title">{data?.known_for[0]?.title}</h4>
        <p className="per_overview ">{data?.known_for[0]?.overview}</p>
        <p>
          {data?.known_for[0]?.release_date ? (
            <>Release Date: {data?.known_for[0]?.release_date}</>
          ) : (
            "Release Date: N/A"
          )}
        </p>
      </div>
    </>
  );
};

export default CelebsPage;
