/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function OfferBox({
  icon,
  title,
  description,
}) {
  return (
    <div className="col-md-4 mt-5">
      <FontAwesomeIcon icon={icon} />
      <br />
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label className="sub-title mb-4 mt-0">{title}</label>
      <p>{description}</p>
    </div>
  );
}

OfferBox.propTypes = {
  icon: PropTypes.objectOf(PropTypes.shape).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default OfferBox;
