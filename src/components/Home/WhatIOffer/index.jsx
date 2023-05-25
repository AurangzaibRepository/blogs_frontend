/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function WhatIOffer({
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
      </div>
    </div>
  );
}

WhatIOffer.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  items: PropTypes.instanceOf(Array).isRequired,
};

export default WhatIOffer;
