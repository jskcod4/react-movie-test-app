import { useEffect, useState } from 'react';
import GetMovies from 'services/GetMovies';

export default function useMovies({ keyword } = { keyword: null }) {
  let [loading, isLoading] = useState(false);
  let [error, isError] = useState(false);
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    isLoading(true);
    isError(false);

    GetMovies({ keyword })
      .then((res) => {
        setMovies(res);
      })
      .catch(() => {
        isError(true);
      })
      .finally(() => {
        isLoading(false);
      });
  }, [keyword]);

  return { movies, loading, error };
}
