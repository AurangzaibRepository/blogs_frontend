/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function PortfolioSection({
  title,
  caption,
  items,
}) {
  return (
    <div id="dv-portfolio">
      <div className="text-center">
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label className="title mb-0">{title}</label>
        <br />
        <span id="span-subtitle">{caption}</span>
        <div className="row mt-5 pt-2 justify-content-center">
          {items.map((item) => (
            <div className="col-md-6 portfolio-box">{item.title}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

PortfolioSection.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  items: PropTypes.instanceOf(Array).isRequired,
};

export default PortfolioSection;
