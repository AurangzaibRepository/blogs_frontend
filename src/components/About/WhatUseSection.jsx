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
  freelancers,
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
        title="Email"
        contents={email}
      />
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label className="full-width sub-title">Technical Gear</label>
      <ul>
        {technicalGear.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label className="full-width sub-title">Apps</label>
      <ul>
        {apps.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <ContentsSection
        titleClass="sub-title"
        title="Freelancers"
        contents={freelancers}
      />
      <ContentsSection
        titleClass="sub-title"
        title="Newsletter"
        contents={newsletter}
      />
      <ContentsSection
        titleClass="sub-title"
        title="Email Marketing"
        contents={emailMarketing}
      />
    </>
  );
}

WhatUseSection.propTypes = {
  body: PropTypes.string.isRequired,
  digitalOcean: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  technicalGear: PropTypes.instanceOf(Array).isRequired,
  apps: PropTypes.instanceOf(Array).isRequired,
  freelancers: PropTypes.string.isRequired,
  newsletter: PropTypes.string.isRequired,
  emailMarketing: PropTypes.string.isRequired,
};

export default WhatUseSection;
