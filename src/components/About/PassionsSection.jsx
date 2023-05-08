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
    <>
      <ContentsSection
        titleClass="title text-center"
        title="passions beyond web development"
        contents={body}
      />
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label className="full-width sub-title">Watching</label>
      <ul>
        {watching.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label className="full-width sub-title">Noteworthy</label>
      <ul>
        {noteworthy.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

PassionsSection.propTypes = {
  body: PropTypes.string.isRequired,
  watching: PropTypes.instanceOf(Array).isRequired,
  noteworthy: PropTypes.instanceOf(Array).isRequired,
};

export default PassionsSection;
