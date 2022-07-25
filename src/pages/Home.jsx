import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { OutlineButton } from '@/components/button/Button';
import { useSelector, useDispatch } from 'react-redux';

import HeroSlide from '@/components/hero-slide/HeroSlide';
import MovieList from '@/components/movie-list';
import { category } from '@/api/tmdbApi';
import { fetchMoviePopular, fetchMovieToprated } from '@/redux/movieSlice';
import { fetchTvPopular, fetchTvToprated } from '@/redux/tvSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { loading, moviesPopular, moviesToprated } = useSelector((state) => state.movie);
  const { loading: loadingTv, tvsPopular, tvsToprated } = useSelector((state) => state.tv);

  const params = {};

  useEffect(() => {
    dispatch(fetchMoviePopular(params));
    dispatch(fetchMovieToprated(params));
    dispatch(fetchTvPopular(params));
    dispatch(fetchTvToprated(params));
  }, []);

  return (
    <>
      {loading === false && <HeroSlide movieItems={moviesPopular.slice(1, 4)} />}

      <div className="container">
        {loading === false && (
          <>
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2>Trending Movies</h2>
                <Link to="/movie">
                  <OutlineButton className="small">View more</OutlineButton>
                </Link>
              </div>
              <MovieList items={moviesPopular} category={category.movie} />
            </div>
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2>Top Rated Movies</h2>
                <Link to="/movie">
                  <OutlineButton className="small">View more</OutlineButton>
                </Link>
              </div>
              <MovieList items={moviesToprated} category={category.movie} />
            </div>
          </>
        )}

        {loadingTv === false && (
          <>
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2>Trending TV</h2>
                <Link to="/tv">
                  <OutlineButton className="small">View more</OutlineButton>
                </Link>
              </div>
              <MovieList items={tvsPopular} category={category.tv} />
            </div>

            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2>Top Rated TV</h2>
                <Link to="/tv">
                  <OutlineButton className="small">View more</OutlineButton>
                </Link>
              </div>
              <MovieList items={tvsToprated} category={category.tv} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
