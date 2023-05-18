/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function FooterContents({ portfolioLinks, aboutLinks }) {
  return (
    <div className="container" id="dv-footer-contents">
      <div className="row">
        <div className="col-md-6 text-center">
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label className="sub-title">PORTFOLIO</label>
          <ul>
            {portfolioLinks.map((item) => (
              <li key={item.id}>
                <a className="small" href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6 text-center">
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label className="sub-title">ABOUT</label>
          <ul>
            {aboutLinks.map((item) => (
              <li key={item.id}>
                <Link className="small" to={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

FooterContents.propTypes = {
  portfolioLinks: PropTypes.instanceOf(Array).isRequired,
  aboutLinks: PropTypes.instanceOf(Array).isRequired,
};

export default FooterContents;
