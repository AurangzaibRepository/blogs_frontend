/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import VitaBox from './VitaBox';

function VitaSection({
  title,
  caption,
}) {
  return (
    <div id="dv-vita">
      <div className="text-center">
        <label className="title mb-0">{title}</label>
        <br />
        <span id="span-subtitle">{caption}</span>
        <VitaBox />
      </div>
    </div>
  );
}

VitaSection.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default VitaSection;
