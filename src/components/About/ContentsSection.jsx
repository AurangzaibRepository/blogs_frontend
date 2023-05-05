/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function ContentsSection({ title, contents }) {
  return (
    <>
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label className="title full-width text-center">{title}</label>
      <p className="pre-line">{contents}</p>
    </>
  );
}

ContentsSection.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
};

export default ContentsSection;
