import { useEffect, useState } from "react";
import axios from "axios";

function useMoveiesTrending(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovieTrending() {
      try {
        const response = await axios.get(url);
        setData(response.data.results.slice(0, 8));
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchMovieTrending();
  }, []);

  return { data, loading, error };
}

export default useMoveiesTrending;
