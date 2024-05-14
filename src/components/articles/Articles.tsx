import React, { useState, useEffect } from "react";
import axios from "axios";
import Article from "./article/Article";
import "./articles.scss";
import { useSelector } from "react-redux";

interface ArticleInt {
  id: number;
  title: string;
  images: any;
  name: string;
  isMovie: boolean;
  backdrop_path: any;
}

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<ArticleInt[]>([]);
  const searchText = useSelector((state: any) => state.searchText);
  const articleType = useSelector((state: any) => state.articleType);

  useEffect(() => {
    const fetchArticles = async () => {
      let url = "",
        entityTypeUrl = articleType === "movies" ? "movie" : "tv";
      let params: any = {
        language: "en-US",
        page: "1",
        api_key: "6d9ba6741c61eb171bd9cab12d1d1fcd", // Replace with your API key
      };

      if (searchText) {
        url = `https://api.themoviedb.org/3/search/${entityTypeUrl}?append_to_response=images`;
        params.query = searchText;
      } else if (articleType === "movies") {
        url = "https://api.themoviedb.org/3/movie/top_rated?append_to_response=images";
      } else if (articleType === "tvShows") {
        url = "https://api.themoviedb.org/3/tv/top_rated?append_to_response=images";
      }

      const options = {
        method: "GET",
        url,
        params,
        headers: {
          accept: "application/json",
        },
      };

      const response = await axios
        .request(options)
        .then((response) => {
          setArticles(response.data.results);
          
        })
        .catch((err) => {
          console.log("Response: ", err);
        });
    };

    fetchArticles();
  }, [articleType, searchText]);

  return (
    <div className="articles-wrapper">
      {articles.map((article) => {
        const isMovie = article.title ? true : false;
        return (
          <Article
            key={article.id}
            image={article.backdrop_path}
            id={article.id}
            title={article.title ?? article.name}
            isMovie={isMovie}
          />
        );
      })}
    </div>
  );
};

export default Articles;
