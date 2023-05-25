/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import imgBanner from '../../assets/home/banner.jpg';

function BannerSection({ title, subTitle }) {
  return (
    <div id="dv-banner" style={{ backgroundImage: `url(${imgBanner})` }}>
      <div className="text-center">
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label id="label-title">{title}</label>
        <br />
        <span id="span-subtitle">{subTitle}</span>
      </div>
    </div>
  );
}

BannerSection.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default BannerSection;
