import React, { useState, useEffect } from "react";
import "./search-bar.scss"; // Import SCSS file

const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState();
  useEffect(() => {
    console.log(searchText);
  }, searchText);
  return (
    <div className="search-wrapper">
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export default SearchBar;
