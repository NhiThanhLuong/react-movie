import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import apiConfig from '@/api/apiConfig';
import CastList from '@/components/cast-list';
import VideoList from '@/components/video-list';
import MovieList from '@/components/movie-list';
import Button from '@/components/button';
import './styles.scss';
import { fetchSimilar, fetchDetail } from '@/redux/itemSlice';

const Detail = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { items, item, loading } = useSelector((state) => state.item);

  const { category, id } = useParams();

  useEffect(() => {
    dispatch(fetchDetail([category, id, { params: {} }]));
    dispatch(fetchSimilar([category, id]));
    window.scrollTo(0, 0);
  }, [category, id]);

  return (
    <>
      {item && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          />
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    item.poster_path || item.backdrop_path
                  )})`,
                }}
              />
            </div>
            <div className="movie-content__info">
              <h1 className="title">{item.title || item.name}</h1>
              <div className="genres">
                {item.genres &&
                  item.genres.slice(0, 5).map((genre, i) => (
                    <span key={i} className="genres__item">
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className="overview">{item.overview}</p>
              <div className="cast">
                <div className="section__header">
                  <h2>Casts</h2>
                </div>
                <CastList id={item.id} />
              </div>
              <Button onClick={() => history.push(`/movie/${item.id}/watch`)}>Watch now</Button>
            </div>
          </div>
          <div className="container">
            <div className="section mb-3">
              <VideoList id={item.id} />
            </div>
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2>Similar</h2>
              </div>
              {loading === false && <MovieList items={items} category={category} />}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
