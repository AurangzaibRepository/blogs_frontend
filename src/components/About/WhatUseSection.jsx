/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

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
