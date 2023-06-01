/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function VitaSection({
  title,
  caption,
  items,
}) {
  return (
    <div id="dv-vita">
      <div className="text-center">
        <label className="title mb-0">{title}</label>
        <br />
        <span id="span-subtitle">{caption}</span>
      </div>
    </div>
  );
}

VitaSection.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  items: PropTypes.instanceOf(Array).isRequired,
};

export default VitaSection;
