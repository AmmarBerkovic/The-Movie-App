import React from "react";
import "./article.scss"; // Import SCSS file

const Article: React.FC = () => {
  return (
    <article>
      <img
        src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
        alt="A"
      />
      <h3>Headline - Title</h3>
    </article>
  );
};

export default Article;
