import React, { useState, useEffect } from "react";
import { GOOGLESEARCH_ENGIN_API_KEY } from "./keys";

//https://cse.google.com/cse/
const CONTEXT_KEY = "f5e4850e2e056550c";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${GOOGLESEARCH_ENGIN_API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => setData(result));
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
