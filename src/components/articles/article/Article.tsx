import React from "react";
import "./article.scss"; // Import SCSS file

interface ArticleProps {
  title: string;
}

const Article: React.FC<ArticleProps> = ({ title }) => {
  return (
    <article>
      <img
        src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
        alt={title}
      />
      <h3>{title}</h3>
    </article>
  );
};

export default Article;