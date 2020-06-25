import { useEffect, useState } from "react";
import axios from "axios";

const useGetData = (url) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(url);
        //const json = await response.json;
        //console.log(json);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    })();
  }, [url]);
  return { data, loading, error, setData };
};

export { useGetData };
