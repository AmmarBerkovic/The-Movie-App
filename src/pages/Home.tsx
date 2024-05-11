import React from "react";
import "./home.scss";
import Navigation from "../components/navigation/Navigation";
import SearchBar from "../components/search-bar/SearchBar";
import Article from "../components/article/Article";

const Home: React.FC = () => {
  return (
    <>
      <Navigation />
      <SearchBar />
      <div className="articles-wrapper">
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </>
  );
};

export default Home;
