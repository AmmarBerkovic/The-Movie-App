import React, { useState, useEffect } from "react";
import axios from "axios";
import Article from "./article/Article";
import "./articles.scss";

interface ArticleInt {
  id: number;
  title: string;
}

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<ArticleInt[]>([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/top_rated",
      params: {
        language: "en-US",
        page: "1",
        api_key: "6d9ba6741c61eb171bd9cab12d1d1fcd",
      },
      headers: {
        accept: "application/json",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setArticles(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="articles-wrapper">
      {articles.map((article) => (
        <Article key={article.id} title={article.title} />
      ))}
    </div>
  );
};

export default Articles;
