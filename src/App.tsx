import React from "react";
import "./globals/styles.scss";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleArticle from "./pages/article/ArticlePage";

function App() {
  return (
    <div className="main-wrapper">
      <Router>
        <Routes>
          <Route path="/tv-shows/:id" element={<SingleArticle />} />
          <Route path="/movies/:id" element={<SingleArticle />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
