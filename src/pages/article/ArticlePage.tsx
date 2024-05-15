import React, { useEffect, useState } from "react";
import axios from "axios";
import "./article-page.scss";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import backArrow from "./../../assets/images/arrow-left-solid.svg";
import YoutubeVideo from "../../components/socials/youtube/YoutubeVideo";

const SingleArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<any>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const imageBaseUrl = "https://image.tmdb.org/t/p/w1280";

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
      url = `https://api.themoviedb.org/3/${entityTypeUrl}/${id}?append_to_response=videos`;

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
      {article?.videos?.results[0]?.key ? (
        <>
          <YoutubeVideo videoId={article?.videos?.results[0]?.key} />
        </>
      ) : (
        <>
          <img
            className="article-header"
            src={`${imageBaseUrl}${article?.backdrop_path}`}
            alt=""
          />
        </>
      )}
      {/* <img
        className="article-header"
        src={`${imageBaseUrl}${article?.backdrop_path}`}
        alt=""
      />
      <YoutubeVideo /> */}
      <h3>{article?.name ?? article?.title}</h3>
      <p>{article?.overview}</p>
    </div>
  );
};

export default SingleArticlePage;
