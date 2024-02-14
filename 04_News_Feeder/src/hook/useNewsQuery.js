import { useState, useEffect, useContext } from "react";
import { categoryContext } from "../context";
const useNewsQuery = () => {
  const [loading, setLoading] = useState({ state: false, message: "" });
  const [error, setError] = useState({ state: false, message: "" });
  const [newsData, setNewsData] = useState([]);
  const { category } = useContext(categoryContext);
  const { type, value } = category;

  const getData = async (url, type) => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        setError({
          ...error,
          state: true,
          message: `News data failed: ${response.status}`,
        });
        return;
        // throw new Error(`News data failed: ${response.status}`);
      }
      const data = await response.json();

      if (type === "search") {
        setNewsData(data.result);
      } else {
        setNewsData(data.articles);
      }
    } catch (err) {
      setError({ ...error, state: true, message: err });
    } finally {
      setLoading({ ...loading, state: false, message: "" });
    }
  };

  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "Data Fetching ",
    });
    if (type === "filter") {
      getData(`http://localhost:8000/v2/top-headlines?category=${value}`, type);
    } else if (type === "search") {
      getData(`http://localhost:8000/v2/search?q=${value}`, type);
    }
  }, [type, value]);

  return { loading, error, newsData };
};

export default useNewsQuery;
