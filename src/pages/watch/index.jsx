import { useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Watch = () => {
  const { id } = useParams();
  const iframeRef = useRef(null);

  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + 'px';
    iframeRef.current.setAttribute('height', height);
    console.log('height');
  }, []);

  return (
    <div className="container">
      <div className={cx('video')}>
        <iframe
          ref={iframeRef}
          src={`https://2embed.org/embed/${id}`}
          width="100%"
          title=""
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
};

Watch.propTypes = {};

export default Watch;
