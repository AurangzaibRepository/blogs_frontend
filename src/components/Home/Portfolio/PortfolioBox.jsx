/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Portfolio1 from '../../../assets/home/portfolio1.jpg';
import Portfolio2 from '../../../assets/home/portfolio2.jpg';
import Portfolio3 from '../../../assets/home/portfolio3.jpg';

function PortfolioBox({ items }) {
  return (
    <div className="row mt-4 pt-2 justify-content-center">
      {items.map((item) => (
        <div className="col-md-4 mt-4">
          <div className="portfolio-box">
            <img src={imageList[index]} alt="Portfolio1" />
            <label className="image-title">{item.title}</label>
          </div>
        </div>
      ))}
    </div>
  );
}

PortfolioBox.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
};

export default PortfolioBox;