/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function AboutMeSection({
  title,
  caption,
  description,
}) {
  return (
    <div className="mt-5">
      <div className="text-center">
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label className="title mb-0">{title}</label>
        <br />
        <span id="span-subtitle">{caption}</span>
        <p className="pre-line mt-4">{description}</p>
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
