import React from "react";

VideoGridItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  channel: {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profileUrl: PropTypes.string.isRequired,
  },
  views: PropTypes.number.isRequired,
  postedAt: PropTypes.date.isRequired,
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
  return <div></div>;
}

export default VideoGridItem;
