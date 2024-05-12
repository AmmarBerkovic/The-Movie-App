import React, { useState, useEffect } from "react";
import axios from "axios";
import Article from "./article/Article";
import "./articles.scss";
import { useSelector } from "react-redux";

interface ArticleInt {
  id: number;
  title: string;
  name: string;
}

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<ArticleInt[]>([]);
  const searchText = useSelector((state: any) => state.searchText);
  const articleType = useSelector((state: any) => state.articleType);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let url = "",
          entityTypeUrl = articleType === "movies" ? "movie" : "tv";
        let params: any = {
          language: "en-US",
          page: "1",
          api_key: "6d9ba6741c61eb171bd9cab12d1d1fcd", // Replace with your API key
        };

        if (searchText) {
          url = `https://api.themoviedb.org/3/search/${entityTypeUrl}`;
          params.query = searchText;
        } else if (articleType === "movies") {
          url = "https://api.themoviedb.org/3/movie/top_rated";
        } else if (articleType === "tvShows") {
          url = "https://api.themoviedb.org/3/tv/top_rated";
        }

        const options = {
          method: "GET",
          url,
          params,
          headers: {
            accept: "application/json",
          },
        };
        
        const response = await axios.request(options).then((response) => {
          if (response.data.results) setArticles(response.data.results);
          console.log(response, options, articleType);
          
        }).catch(err => {
          console.log("Errror: ", err);
          
        });
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchArticles();
  }, [articleType, searchText]);

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
      .then((response) => {
        setArticles(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="articles-wrapper">
      {articles.map((article) => (
        <Article key={article.id} title={article.title ?? article.name} />
      ))}
    </div>
  );
};

export default Articles;
