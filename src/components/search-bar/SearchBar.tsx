import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchText } from "../../utils/store";
import './search-bar.scss';

const SearchBar: React.FC = () => {
  const [searchText, setSearchTextLocal] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    setSearchTextLocal(newText);
    if (newText.length > 2) {
      dispatch(setSearchText(newText)); // Dispatch action to update search text in Redux store
    } else {
      dispatch(setSearchText(''))
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