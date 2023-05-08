/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import ContentsSection from './ContentsSection';

function WhatUseSection({
  body,
  digitalOcean,
  email,
  technicalGear,
  apps,
  freelenacers,
  newsletter,
  emailMarketing,
}) {
  return (
    <>
      <ContentsSection
        titleClass="title text-center"
        title="what i use"
        contents={body}
      />
      <ContentsSection
        titleClass="sub-title"
        title="Digital Ocean"
        contents={digitalOcean}
      />
      <ContentsSection
        titleClass="sub-title"
        title="email"
        contents={email}
      />
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label className="full-width sub-title">Technical Gear</label>
      <ul>
        {technicalGear.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

WhatUseSection.propTypes = {
  body: PropTypes.string.isRequired,
  digitalOcean: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  technicalGear: PropTypes.instanceOf(Array).isRequired,
  apps: PropTypes.instanceOf(Array).isRequired,
  freelenacers: PropTypes.string.isRequired,
  newsletter: PropTypes.string.isRequired,
  emailMarketing: PropTypes.string.isRequired,
};

export default WhatUseSection;
