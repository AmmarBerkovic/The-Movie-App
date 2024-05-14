import React from "react";
import "./article.scss"; // Import SCSS file
import { Link } from "react-router-dom";

interface ArticleProps {
  id: number;
  title: string;
  isMovie: boolean;
  image: string;
}
const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

const Article: React.FC<ArticleProps> = ({ id, title, isMovie, image }) => {
  return (
    <Link to={isMovie ? `/movies/${id}` : `/tv-shows/${id}`}>
      <article>
        <img
          src={`${imageBaseUrl}${image}`}
          alt={title}
        />
        <h3>{title}</h3>
      </article>
    </Link>
  );
};

export default Article;
