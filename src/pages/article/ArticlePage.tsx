import React, { useEffect, useState } from "react";
import axios from "axios";
import "./article-page.scss";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import backArrow from "./../../assets/images/arrow-left-solid.svg";

const SingleArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<any>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchArticle = async () => {
      let url = "",
        entityTypeUrl = location.pathname.startsWith("/movies")
          ? "movie"
          : "tv";
      let params: any = {
        language: "en-US",
        page: "1",
        api_key: "6d9ba6741c61eb171bd9cab12d1d1fcd", // Replace with your API key
      };
      url = `https://api.themoviedb.org/3/${entityTypeUrl}/${id}?append_to_response=images`;

      const options = {
        method: "GET",
        url,
        params,
        headers: {
          accept: "application/json",
        },
      };

      const response = await axios
        .request(options)
        .then((response) => {
          console.log(response);

          setArticle(response.data);
        })
        .catch((err) => {
          console.log("Response: ", err);
        });
    };
    fetchArticle();
  }, []);

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="single-article">
      <img className="back-arrow" src={backArrow} alt="" onClick={goBack} />
      <img
        className="article-header"
        src="https://image.tmdb.org/t/p/w500/kysDTCloxUPJ1BILI4f8gs74fcr.png"
        alt=""
      />
      <h3>{article?.name ?? article?.title}</h3>
      <p>{article?.overview}</p>
    </div>
  );
};

export default SingleArticlePage;
