import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { category as cate, movieType, tvType } from '@/api/tmdbApi';
import { OutlineButton } from '@/components/button';
import MovieCard from '@/components/movie-card';
import MovieSearch from '@/components//movie-search';
import './styles.scss';
import {
  fetchMovieItem,
  fetchTvItem,
  fetchSearch,
  fetchLoadMoreMovieItem,
  fetchLoadMoreTvItem,
  fetchLoadMoreSearch,
} from '@/redux/itemSlice';

const MovieGrid = ({ category }) => {
  const dispatch = useDispatch();
  const { keyword } = useParams();

  const { items, page, total_pages, loading } = useSelector((state) => state.item);

  useEffect(() => {
    if (keyword) {
      dispatch(fetchSearch([category, { params: { query: keyword } }]));
    } else {
      category === cate.movie
        ? dispatch(fetchMovieItem([movieType.upcoming, { params: {} }]))
        : dispatch(fetchTvItem([tvType.popular, { params: {} }]));
    }
  }, [category, keyword, useParams()]);

  const handleLoadMore = () => {
    if (keyword) {
      const params = {
        page: page + 1,
        query: keyword,
      };
      dispatch(fetchLoadMoreSearch([category, { params }]));
    } else {
      const params = {
        page: page + 1,
      };
      category === cate.movie
        ? dispatch(fetchLoadMoreMovieItem([movieType.upcoming, { params }]))
        : dispatch(fetchLoadMoreTvItem([tvType.popular, { params }]));
    }
  };

  return (
    <>
      <div className="section mb-3">
        <MovieSearch category={category} keyword={keyword} />
      </div>
      <div className="movie-grid">
        {loading === false &&
          items.map((item, i) => <MovieCard category={category} item={item} key={i} />)}
      </div>
      {page < total_pages ? (
        <div className="movie-grid__loadmore">
          <OutlineButton className="small" onClick={handleLoadMore}>
            Load more
          </OutlineButton>
        </div>
      ) : null}
    </>
  );
};

MovieGrid.propTypes = {
  category: PropTypes.string,
};

export default MovieGrid;
