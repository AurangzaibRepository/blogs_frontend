import React from 'react';
import PropTypes from 'prop-types';

function FooterContents({ portfolioLinks, aboutLinks }) {
  return (
    <div className="container" id="dv-footer-contents">
      <div className="row">
        <div className="col-md-6 text-center">
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label className="sub-title">PORTFOLIO</label>
          <ul>
           
          </ul>
        </div>
        <div className="col-md-6 text-center">
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label className="sub-title">ABOUT</label>
          <ul>
            
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
