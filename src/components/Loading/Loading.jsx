import { ClipLoader } from "react-spinners";
import "./loading.css";

const Loading = ({ loading, error, children }) => {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading">
          <ClipLoader color="#00BFFF" loading={true} size={100} />
        </div>
      </div>
    );
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return <>{children}</>;
};

export default Loading;
