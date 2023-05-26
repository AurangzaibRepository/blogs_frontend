/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faTree,
  faPeopleGroup,
  faSearchPlus,
  faChampagneGlasses,
  faBlog,
} from '@fortawesome/free-solid-svg-icons';

function WhatIOfferSection({
  title,
  caption,
  items,
}) {
  return (
    <div id="dv-whatoffer">
      <div className="text-center">
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label className="title mb-0">{title}</label>
        <br />
        <span id="span-subtitle">{caption}</span>
        <div className="row mt-4">
          {items.map((item) => (
            <div className="col-md-4 mt-4" key={item.id}>
              <FontAwesomeIcon icon={faTree} />
              <br />
              { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
              <label className="sub-title mb-4 mt-0">{item.title}</label>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

WhatIOfferSection.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  items: PropTypes.instanceOf(Array).isRequired,
};

export default WhatIOfferSection;
