/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Portfolio1 from '../../../assets/home/portfolio1.jpg';
import Portfolio2 from '../../../assets/home/portfolio2.jpg';
import Portfolio3 from '../../../assets/home/portfolio3.jpg';

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
        <div className="row mt-3 pt-2 justify-content-center">
          {items.map((item) => (
            <div className="col-md-6 mt-4">
              <div className="portfolio-box">{item.title}</div>
            </div>
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
