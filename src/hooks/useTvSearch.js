import { useState, useEffect } from "react";
import axios from "axios";

const useTvSearch = (query) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASE_URL = `https://api.themoviedb.org/3/search/tv?api_key=14bdd69ce887376edfafb09f23f78fe9&query=${query}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(BASE_URL);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { data, loading, error };
};

export default useTvSearch;