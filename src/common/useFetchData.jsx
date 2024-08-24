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
        addDataIntoCache(pathToFetch, pathToFetch, res.data)
        setIsLoading(false);
        setContent(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
        setContent(err.message);
      });
  }, [pathToFetch]);

  return [isLoading, content];
};

const addDataIntoCache = (cacheName, url, resData) => {
  // Converting our response into Actual Response form
  const data = new Response(JSON.stringify(resData));
  if ("caches" in window) {
    // Opening given cache and putting our data into it
    caches.open(cacheName).then((cache) => {
      cache.put(url, data);
      console.log("Data Added into cache!");
    });
  }
};

const getCacheData = async (url) => {
  const cacheStorage = await caches.open(url);
  const cachedResponse = await cacheStorage.match(url);
  let response = await cachedResponse.json();
  return response;
}