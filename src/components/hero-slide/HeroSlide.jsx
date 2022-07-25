import PropTypes from 'prop-types';

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import HeroSlideItem from '@/components/hero-slide/HeroSlideItem';
import TrailerModal from '@/components/hero-slide/TrailerModal';
import './hero-slide.scss';

SwiperCore.use([Autoplay]);

const HeroSlide = ({ movieItems }) => {
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

HeroSlide.propTypes = {
  movieItems: PropTypes.array,
};

export default HeroSlide;
