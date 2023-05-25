import React from 'react';

function BannerSection() {
  return (
    <div id="dv-banner" style={{ backgroundImage: `url(${imgBanner})` }}>
      <div className="text-center">
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label id="label-title">Robin Wieruch</label>
        <br />
        <span id="span-subtitle">German Software Engineer for React.js, Node.js and GraphQL</span>
      </div>
    </div>
  );
}

export default BannerSection;
