import React from 'react';
import PropTypes from 'prop-types';
import bg from '@/assets/footer-bg.jpg';
import './styles.scss';

const PageHeader = (props) => {
  return (
    <div className="page-header" style={{ backgroundImage: `url(${bg})` }}>
      <h2>{props.children}</h2>
    </div>
  );
};

PageHeader.propTypes = {
  children: PropTypes.node,
};

export default PageHeader;
