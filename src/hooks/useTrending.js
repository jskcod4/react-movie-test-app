import { useEffect, useState } from 'react';

import GetTrending from 'services/GetTrending';

export default function useTrending({ type }) {
  let [loading, isLoading] = useState(false);
  let [error, isError] = useState(false);
  let [trending, setTrending] = useState([]);

  useEffect(() => {
    isLoading(true);
    isError(false);

    GetTrending({ type })
      .then((res) => {
        setTrending(res);
      })
      .catch(() => {
        isError(true);
      })
      .finally(() => {
        isLoading(false);
      });
  }, [type]);

  return { trending, loading, error };
}
