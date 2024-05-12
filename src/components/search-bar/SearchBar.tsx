import React, { useState, useEffect } from "react";
import "./search-bar.scss";

const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("Search text changed:", searchText);
  }, [searchText]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    if(searchText.length > 2) {
      
      
    }
  };

  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
