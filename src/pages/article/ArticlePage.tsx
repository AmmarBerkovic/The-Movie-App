import React, { useEffect, useState } from "react";
import "./article-page.scss";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getDetailedViewData } from "../../utils/services/moviedb.service";
import backArrow from "./../../assets/images/arrow-left-solid.svg";
import YoutubeVideo from "../../components/socials/youtube/YoutubeVideo";

const SingleArticlePage: React.FC = () => {
  const navigate = useNavigate(),
    location = useLocation(),
    [article, setArticle] = useState<any>(null),
    { id } = useParams<{ id: string }>();
  const imageBaseUrl = process.env.REACT_APP_THEMOVIEDB_IMAGES_URL,
    type = location.pathname.startsWith("/movies") ? "movies" : "tw-shows";

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await getDetailedViewData(id, type);
      setArticle(response);
    };
    fetchArticle();
  }, []);

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="single-article">
      <div className="back-wrapper" onClick={goBack}>
        <img className="back-arrow" src={backArrow} alt="Back arrow" />
        <span>Back</span>
      </div>
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
      <h3>{article?.name ?? article?.title}</h3>
      <p>{article?.overview}</p>
    </div>
  );
};

export default SingleArticlePage;
