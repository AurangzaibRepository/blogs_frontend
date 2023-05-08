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

export default PassionsSection;
