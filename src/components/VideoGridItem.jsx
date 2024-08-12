import React from "react";
import PropTypes from "prop-types";

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
  return (
    <div className="flex flex-col gap-2">
      <a href={`/watch?v=${id}`} className="relative aspect-video ">
        <img
          src={thumbnailUrl}
          className="block w-full object-cover rounded-xl"
        />
        <div
          className="absolute bottom-1 right-1 bg-secondary-dark text-secondary
        text-sm px-0.5 rounded"
        >
          {duration}
        </div>
      </a>
    </div>
  );
}

export default VideoGridItem;
