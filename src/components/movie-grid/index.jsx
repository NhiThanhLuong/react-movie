import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import tmdbApi, { category as cate, movieType, tvType } from '@/api/tmdbApi';
import { OutlineButton } from '@/components/button/Button';
import MovieCard from '@/components/movie-card';
import MovieSearch from '@/components//movie-search';
import './styles.scss';

const MovieGrid = ({ category }) => {
  const [items, setItems] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const { keyword } = useParams();

  useEffect(() => {
    const getList = async () => {
      let response = null;
      if (keyword) {
        const params = {
          query: keyword,
        };
        response = await tmdbApi.search(category, { params });
      } else {
        const params = {};
        switch (category) {
          case cate.movie:
            response = await tmdbApi.getMoviesList(movieType.upcoming, { params });
            break;
          default:
            response = await tmdbApi.getTvList(tvType.popular, { params });
        }
      }
      setItems(response.results);
      setTotalPage(response.total_pages);
    };
    getList();
  }, [category, keyword, useParams()]);

  const handleLoadMore = async () => {
    let response = null;
    if (keyword) {
      const params = {
        page: page + 1,
        query: keyword,
      };
      response = await tmdbApi.search(category, { params });
    } else {
      const params = {
        page: page + 1,
      };
      switch (category) {
        case cate.movie:
          response = await tmdbApi.getMoviesList(movieType.upcoming, { params });
          break;
        default:
          response = await tmdbApi.getTvList(tvType.popular, { params });
      }
    }
    setItems([...items, ...response.results]);
    setPage(page + 1);
  };

  return (
    <>
      <div className="section mb-3">
        <MovieSearch category={category} keyword={keyword} />
      </div>
      <div className="movie-grid">
        {items.map((item, i) => (
          <MovieCard category={category} item={item} key={i} />
        ))}
      </div>
      {page < totalPage ? (
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
