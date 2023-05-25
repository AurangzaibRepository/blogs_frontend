/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function AboutMeSection({
  title,
  caption,
  description,
}) {
  return (
    <div>
      <div className="text-center">
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label className="title">{title}</label>
        <br />
        <span id="span-subtitle">{caption}</span>
      </div>
    </div>
  );
}

AboutMeSection.propTypes = {
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AboutMeSection;
