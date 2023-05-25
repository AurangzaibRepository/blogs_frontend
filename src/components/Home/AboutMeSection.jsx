/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import imgAboutMe from '../../assets/home/about_me.jpg';

function AboutMeSection({
  title,
  caption,
  description,
}) {
  return (
    <div>
      <div className="text-center">
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label className="title mb-0">{title}</label>
        <br />
        <span id="span-subtitle">{caption}</span>
        <br />
        <img
          id="img-aboutme"
          className="mt-5"
          src={imgAboutMe}
          alt="about me"
        />
        <p className="pre-line mt-5">{description}</p>
      </div>
    </div>
  );
}

AboutMeSection.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AboutMeSection;
