/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import ContentsSection from './ContentsSection';

function PassionsSection({
  body,
  watching,
  noteworthy,
}) {
  return (
    <ContentsSection
      titleClass="title text-center"
      title="passions beyond web development"
      contents={body}
    />
  );
}

PassionsSection.propTypes = {
  body: PropTypes.string.isRequired,
  watching: PropTypes.instanceOf(Array).isRequired,
  noteworthy: PropTypes.instanceOf(Array).isRequired,
};

export default PassionsSection;
