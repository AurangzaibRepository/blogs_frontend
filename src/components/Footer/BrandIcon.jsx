/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BrandIcon({
  url,
  icon,
  className
}) {
  return (
    <a href={url}>
      <FontAwesomeIcon icon={icon} className={className} />
    </a>
  );
}

export default BrandIcon;
