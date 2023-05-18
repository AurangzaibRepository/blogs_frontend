/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function Box({ title, icon }) {
  return (
    <div className="dv-box">
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label className="title">{title}</label>
    </div>
  );
}

Box.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.instanceOf(Object).isRequired,
}

export default Box;
