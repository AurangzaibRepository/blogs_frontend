/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function ContentsSection({
  titleClass,
  title,
  contents,
  opportunities,
}) {
  return (
    <>
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label className={`full-width ${titleClass}`}>{title}</label>
      <p className="pre-line">{contents}</p>
      {opportunities
      && (
        opportunities.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))
      )}
    </>
  );
}

ContentsSection.propTypes = {
  titleClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
  opportunities: PropTypes.instanceOf(Array),
};

ContentsSection.defaultProps = {
  opportunities: [],
};

export default ContentsSection;
