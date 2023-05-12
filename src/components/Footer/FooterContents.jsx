import React from 'react';

function FooterContents() {
  return (
    <div className="container" id="dv-footer-contents">
      <div className="row">
        <div className="col-md-6 text-center">
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label className="sub-title">PORTFOLIO</label>
        </div>
        <div className="col-md-6 text-center">
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label className="sub-title">ABOUT</label>
        </div>
      </div>
    </div>
  );
}

export default FooterContents;
