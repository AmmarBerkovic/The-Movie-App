import React, { useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import "./youtube-video.scss";

interface YoutubeProps {
  videoId: string;
}

const YoutubeVideo: React.FC<YoutubeProps> = ({ videoId }) => {
  const [isVideoReady, setIsVideoReady] = useState(false);

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {    
    setIsVideoReady(true);
    event.target.playVideo();
  };

  const opts: YouTubeProps["opts"] = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="video-container">
      <YouTube videoId={videoId} onReady={onPlayerReady} opts={opts} />
    </div>
  );
};

export default YoutubeVideo;