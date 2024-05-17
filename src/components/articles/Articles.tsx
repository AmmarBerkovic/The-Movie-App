import React, { useState, useEffect } from "react";
import Article from "./article/Article";
import "./articles.scss";
import { useSelector } from "react-redux";
import {
  getTopRatedList,
  getSearchResults,
} from "../../utils/services/moviedb.service";

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
      const responseData = searchText
        ? await getSearchResults(articleType, searchText)
        : await getTopRatedList(articleType);
      setArticles(responseData);
    };

    fetchArticles();
  }, [articleType, searchText]);

  return (
    <div className="articles-wrapper">
      {articles.length === 0 ? (
        <h1>No results!</h1>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default Articles;
