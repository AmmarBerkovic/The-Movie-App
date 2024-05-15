import React, { useEffect } from "react";
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
          src={
            image
              ? `${imageBaseUrl}${image}`
              : "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
          }
          alt={title}
        />
        <h3>{title}</h3>
      </article>
    </Link>
  );
};

export default Article;
