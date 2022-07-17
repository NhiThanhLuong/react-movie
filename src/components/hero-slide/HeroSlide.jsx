import { useState, useEffect } from 'react';

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import tmdbApi, { movieType } from '@/api/tmdbApi';
import HeroSlideItem from '@/components/hero-slide/HeroSlideItem';
import TrailerModal from '@/components/hero-slide/TrailerModal';
import './hero-slide.scss';

SwiperCore.use([Autoplay]);

const HeroSlide = () => {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, { params });
        setMovieItems(response.results.slice(1, 4));
        console.log(response);
      } catch {
        console.log('error');
      }
    };
    getMovies();
  }, []);

  return (
    <div className="hero-slide">
      <Swiper modules={[Autoplay]} grabCursor={true} spaceBetween={0} slidesPerView={1}>
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <HeroSlideItem item={item} className={`${isActive ? 'active' : ''}`} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {movieItems.map((item, i) => (
        <TrailerModal key={i} item={item} />
      ))}
    </div>
  );
};

export default HeroSlide;
