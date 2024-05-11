import React from "react";
import "./search-bar.scss"; // Import SCSS file

const SearchBar: React.FC = () => {
  return (
    <div className="search-wrapper">
      <input type="text" placeholder="Search..."/>
    </div>
  );
};

export default SearchBar;
