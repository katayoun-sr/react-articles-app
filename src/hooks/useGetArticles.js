import { useEffect, useState } from "react";
import { getArticles } from "../services/articles.service";
import useLoading from "./useLoading";

export const useGetArticles = () => {
  const [articles, setArticles] = useState([]);
  const { show, hide } = useLoading();

  useEffect(() => {
    show();
    getArticles()
      .then(res => setArticles(res.data))
      .catch(err => console.log("error:", err))
      .finally(() => hide());
}, []);


  return { articles};
};
