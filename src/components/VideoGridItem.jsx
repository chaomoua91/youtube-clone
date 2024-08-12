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
          {formatDuration(duration)}
        </div>
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
