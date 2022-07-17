import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import apiConfig from '@/api/apiConfig';
import { category as cate } from '@/api/tmdbApi';
import Button from '@/components/button/Button';
import './styles.scss';

const MovieCard = ({ item, category }) => {
  const link = '/' + cate[category] + '/' + item.id;

  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);
  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
        <Button>
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
};

MovieCard.propTypes = {
  item: PropTypes.object,
  category: PropTypes.string,
};

export default MovieCard;
