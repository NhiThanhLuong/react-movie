import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import tmdbApi from '@/api/tmdbApi';
import apiConfig from '@/api/apiConfig';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const CastList = ({ id }) => {
  const { category } = useParams();

  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      const res = await tmdbApi.credits(category, id);
      setCasts(res.cast.slice(0, 5));
    };
    getCredits();
  }, [category, id]);

  return (
    <div className={cx('casts')}>
      {casts.map((item, i) => (
        <div key={i} className={cx('casts__item')}>
          <div
            className={cx('casts__item__img')}
            style={{ backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})` }}
          />
          <p className={cx('casts__item__name')}>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

CastList.propTypes = {
  id: PropTypes.number,
};

export default CastList;
