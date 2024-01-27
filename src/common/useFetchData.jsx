import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchData = (pathToFetch) => {
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(pathToFetch, {
        headers: {
          "Content-Type": "Application/json",
          // "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        setIsLoading(false);
        setContent(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
        setContent(err.message);
      });
  }, []);

  return [isLoading, content];
};
