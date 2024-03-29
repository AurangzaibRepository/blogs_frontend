/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import PortfolioBox from './PortfolioBox';

function PortfolioSection({
  title,
  caption,
}) {
  return (
    <div id="dv-portfolio">
      <div className="text-center">
        <label className="title mb-0">{title}</label>
        <br />
        <span id="span-subtitle">{caption}</span>
        <PortfolioBox />
      </div>
    </div>
  );
}

PortfolioSection.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default PortfolioSection;
