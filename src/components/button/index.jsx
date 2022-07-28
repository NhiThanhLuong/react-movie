/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

// import './styles.scss';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Button = (props) => {
  return (
    <button
      className={cx('btn', props.className)}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </button>
  );
};

export const OutlineButton = (props) => {
  return (
    <Button
      className={cx('btn-outline', props.className)}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </Button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
