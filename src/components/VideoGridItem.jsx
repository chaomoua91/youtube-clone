import React from "react";
import PropTypes from "prop-types";
import { formatDuration } from "../utils/formatDuration";
import { formatTimeAgo } from "../utils/formatTimeAgo";

VideoGridItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  channel: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profileUrl: PropTypes.string.isRequired,
  }).isRequired,
  views: PropTypes.number.isRequired,
  postedAt: PropTypes.instanceOf(Date).isRequired,
  duration: PropTypes.number.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
};

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
  notation: "compact",
});

function VideoGridItem({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl,
}) {
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (videoRef.current == null) return;

    if (isVideoPlaying) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isVideoPlaying]);
  return (
    <div
      className="flex flex-col gap-2 "
      onMouseEnter={() => setIsVideoPlaying(true)}
      onMouseLeave={() => setIsVideoPlaying(false)}
    >
      <a href={`/watch?v=${id}`} className="relative aspect-video ">
        <img
          src={thumbnailUrl}
          className={`block w-full h-full object-cover transition-[border-radius] duration-200 ${
            isVideoPlaying ? "rounded-none" : "rounded-xl"
          }`}
        />
        <div
          className="absolute bottom-1 right-1 bg-secondary-dark text-secondary
        text-sm px-0.5 rounded"
        >
          {formatDuration(duration)}
        </div>
        <video
          className={`block h-full object-cover absolute inset-0 
            transition-opacity duration-200  ${
              isVideoPlaying ? "opacity-100 delay-200" : "opacity-0"
            }`}
          ref={videoRef}
          muted
          playsInline
          src={videoUrl}
        />
      </a>
      <div className="flex gap-2">
        <a href={`/@${channel.id}`} className="flex-shrink-0">
          <img className="w-12 h-12 rounded-full" src={channel.profileUrl} />
        </a>
        <div className="flex flex-col ">
          <a href={`/watch?v=${id}`} className="font-bold">
            {title}
          </a>
          <a href={`/@${channel.id}`} className="text-secondary-text text-sm">
            {channel.name}
          </a>
          <div className="text-secondary-text text-sm">
            {VIEW_FORMATTER.format(views)} views • {formatTimeAgo(postedAt)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoGridItem;
