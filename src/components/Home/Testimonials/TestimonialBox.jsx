/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function TestimonialBox({ items }) {
  return (
    <div className="row mt-4 pt-2">
      {items.map((item, index) => (
        <div className="col-md-4 mt-4" key={item.id}>
        </div>
      ))}
    </div>
  );
}

TestimonialBox.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
};

export default TestimonialBox;
