import React, { useState, useEffect } from 'react';

function useJsonFetch(url, opts) {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let canceled = false;

    const fetchJson = async (url, opts = {}) => {
      setError(false);

      if (typeof url !== 'string') {
        return;
      }

      setLoading(true);
      setData(undefined);
      try {
        const response = await fetch(url, opts);
        const data = await response.json();
        if (!canceled) {
          setData(data);
        }

        if (
          !response.ok
          || !(response.status >= 200 && response.status <= 209)
        ) {
          throw new Error(response.statusText);
        }
      } catch (e) {
        if (!canceled) {
          setError(e.message);
        }
      } finally {
        if (!canceled) {
          setLoading(false);
        }
      }
    }

    fetchJson(url, opts);

    return () => {
      canceled = true;
    };
  }, [url, JSON.stringify(opts)]);

  return [data, loading, error];
}

export default useJsonFetch;
