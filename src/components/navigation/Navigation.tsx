import React, { useState } from "react";
import "./navigation.scss";

import { useDispatch } from "react-redux";
import { setArticleType } from "../../utils/store";
import { useSelector } from "react-redux";

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const [activeNavItem, setActiveNavItem] = useState<string | null>(
    useSelector((state: any) => state.articleType)
  );

  const handleNavClick = (type: string) => {
    dispatch(setArticleType(type));
    setActiveNavItem(type === activeNavItem ? null : type);
  };

  return (
    <nav>
      <ul>
        <li
          className={`nav-item ${activeNavItem === "tvShows" ? "active" : ""}`}
          onClick={() => handleNavClick("tvShows")}
        >
          TV Shows
        </li>
        <li
          className={`nav-item ${activeNavItem === "movies" ? "active" : ""}`}
          onClick={() => handleNavClick("movies")}
        >
          Movies
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
