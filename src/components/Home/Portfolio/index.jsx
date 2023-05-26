/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function PortfolioSection({
  title,
  description,
  items,
}) {
  return (
    <div id="dv-portfolio">
      <div className="text-center">
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label className="title mb-0">{title}</label>
        <br />
        <span id="span-subtitle">{description}</span>
      </div>
    </div>
  );
}

PortfolioSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  items: PropTypes.instanceOf(Array).isRequired,
};

export default PortfolioSection;
