/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlock } from '@fortawesome/free-solid-svg-icons';

function Box({
  title,
  icon,
  imageAlt,
}) {
  return (
    <div className="dv-box">
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label className="title">{title}</label>
      <img src={icon} alt={imageAlt} />
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label className="label-unlock">
        <FontAwesomeIcon icon={faUnlock} />
        Unlock Course
      </label>
    </div>
  );
}

Box.propTypes = {
  title: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  icon: PropTypes.instanceOf(Object).isRequired,
};

export default Box;
