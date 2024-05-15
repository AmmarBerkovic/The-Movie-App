import React, { useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import "./youtube-video.scss";
interface YoutubeProps {
  videoId: string;
}
const YoutubeVideo: React.FC<YoutubeProps> = ({ videoId }) => {
  const [isVideoReady, setIsVideoReady] = useState(false);

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.playVideo();
    setIsVideoReady(true);
  };

  const opts: YouTubeProps["opts"] = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className="video-container">
      <YouTube
        videoId={videoId}
        onReady={onPlayerReady}
        opts={isVideoReady ? opts : { ...opts, autoplay: 0 }}
      />
    </div>
  );
};

export default YoutubeVideo;
