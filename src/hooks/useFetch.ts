import { useState, useEffect } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState({ imageUrl: "", title: "", summary: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();

        setIsLoading(false);
        setData(data);
        setIsError(false);
      } catch (err) {
        setIsError(true);
        if (err instanceof Error) {
          console.log(err.message);
          return;
        }
        console.log("Unknown Error");
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, isError };
};
