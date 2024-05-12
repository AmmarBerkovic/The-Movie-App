import React from "react";
import "./navigation.scss"; // Import SCSS file

import { useDispatch } from "react-redux";
import { setArticleType } from "../../utils/store";

const Navigation: React.FC = () => {
  const dispatch = useDispatch();

  const handleNavClick = (type: string) => {
    dispatch(setArticleType(type)); // Dispatch action to update article type in Redux store
  };

  return (
    <nav>
      <ul>
        <li onClick={() => handleNavClick("movies")}>Movies</li>
        <li onClick={() => handleNavClick("tvShows")}>TV Shows</li>
      </ul>
    </nav>
  );
};

export default Navigation;