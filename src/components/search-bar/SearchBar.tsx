import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "../../utils/store";
import "./search-bar.scss";

const SearchBar: React.FC = () => {
  const [searchText, setSearchTextLocal] = useState(
    useSelector((state: any) => state.searchText)
  );
  const dispatch = useDispatch();
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    setSearchTextLocal(newText);
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    if (newText.length > 2) {
      const timeout = setTimeout(() => {
        dispatch(setSearchText(newText));
      }, 1000);
      setTypingTimeout(timeout);
    } else {
      dispatch(setSearchText(""));
    }
  };

  useEffect(() => {
    return () => {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, [typingTimeout]);

  // useEffect(() => {
  //   const delayDebounceFn = setTimeout(() => {
  //     console.log(searchText);
      
  //   }, 1000)

  //   return () => clearTimeout(delayDebounceFn)
  // }, [searchText])
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
