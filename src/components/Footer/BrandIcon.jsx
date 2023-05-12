/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BrandIcon({
  url,
  icon,
  className,
}) {
  return (
    <a href={url} className={className}>
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}

BrandIcon.propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.instanceOf(Object).isRequired,
};

BrandIcon.defaultProps = {
  className: '',
};

export default BrandIcon;
