import React from "react";
import "./home.scss";
import Navigation from "../../components/navigation/Navigation";
import SearchBar from "../../components/search-bar/SearchBar";
import Articles from "../../components/articles/Articles";

const Home: React.FC = () => {
  return (
    <>
      <Navigation />
      <SearchBar />
      <Articles />
    </>
  );
};

export default Home;
