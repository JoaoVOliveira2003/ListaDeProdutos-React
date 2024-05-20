import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // let controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(url/*, { signal: controller.signal }*/);
      const result = await response.json();
      setLoading(false);
      setData(result);
    };

    fetchData();

    // return () => controller.abort();
  }, [url]);

  return { data, loading };
};
