/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext } from 'react';
import AppContext from '../../layouts/AppContext';
import Portfolio1 from '../../../assets/home/portfolio1.jpg';
import Portfolio2 from '../../../assets/home/portfolio2.jpg';
import Portfolio3 from '../../../assets/home/portfolio3.jpg';

function PortfolioBox() {
  const { items } = useContext(AppContext);
  const imageList = [
    Portfolio1,
    Portfolio2,
    Portfolio3,
  ];

  return (
    <div className="row mt-4 pt-2">
      {items.map((item, index) => (
        <div className="col-md-4 mt-4" key={item.id}>
          <div className="portfolio-box">
            <img src={imageList[index]} alt="Portfolio1" />
            <label className="image-title">{item.title}</label>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PortfolioBox;
