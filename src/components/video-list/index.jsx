import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import tmdbApi from '@/api/tmdbApi';
import Video from './Video';

const VideoList = ({ id }) => {
  const { category } = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const res = await tmdbApi.getVideos(category, id);
      setVideos(res.results.slice(0, 5));
    };
    getVideos();
  }, [category, id]);
  return (
    <>
      {videos.map((item, i) => (
        <Video key={i} item={item} />
      ))}
    </>
  );
};

VideoList.propTypes = {
  id: PropTypes.number,
};

export default VideoList;
