import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<any>(null); // Assuming article data structure

  useEffect(() => {
    // Fetch data for the specific article based on the ID
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`YOUR_API_ENDPOINT/${id}`); // Replace YOUR_API_ENDPOINT with actual endpoint
        setArticle(response.data); // Assuming response data structure
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();

    // Cleanup function if necessary
    return () => {
      // Cleanup logic
    };
  }, [id]); // Fetch data whenever ID changes

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-article">
      {/* Render article details here */}
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      {/* Additional article details */}
    </div>
  );
};

export default SingleArticlePage;
