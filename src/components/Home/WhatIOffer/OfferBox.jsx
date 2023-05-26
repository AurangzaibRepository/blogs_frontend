import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function OfferBox() {
  return (
    <div className="col-md-4 mt-5" key={item.id}>
      <FontAwesomeIcon icon={} />
      <br />
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label className="sub-title mb-4 mt-0">{item.title}</label>
      <p>{}</p>
    </div>
  );
}

export default OfferBox;
