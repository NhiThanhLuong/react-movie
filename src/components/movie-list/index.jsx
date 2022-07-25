import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';

import MovieCard from '@/components/movie-card';
import './styles.scss';

const MovieList = ({ items, category }) => {
  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <MovieCard item={item} category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

MovieList.propTypes = {
  items: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
};

export default MovieList;
