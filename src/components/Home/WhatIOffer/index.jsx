/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import {
  faHeart,
  faTree,
  faPeopleGroup,
  faSearchPlus,
  faChampagneGlasses,
  faBlog,
} from '@fortawesome/free-solid-svg-icons';
import OfferBox from './OfferBox';

function WhatIOfferSection({
  title,
  caption,
  items,
}) {
  const iconArray = [
    faHeart,
    faTree,
    faPeopleGroup,
    faSearchPlus,
    faChampagneGlasses,
    faBlog,
  ];

  return (
    <div id="dv-whatoffer">
      <div className="text-center">
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label className="title mb-0">{title}</label>
        <br />
        <span id="span-subtitle">{caption}</span>
        <div className="row mt-4">
          {items.map((item) => (
            <OfferBox
              title={item.title}
              description={item.description}
            />
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
