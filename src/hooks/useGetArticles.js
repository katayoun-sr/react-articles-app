import { useEffect, useState } from "react";
import { getArticles } from "../services/articles.service";

export const useGetArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticles()
      .then((res) => setArticles(res.data))
      .catch((err) => console.log("error:", err))
      .finally(() => setLoading(false));
  }, []);

  return { articles, loading };
};
