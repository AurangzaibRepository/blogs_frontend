/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import TestimonialBox from './TestimonialBox';

function TestimonialsSection({
  title,
  caption,
  items,
}) {
  return (
    <div id="dv-testimonials">
      <div className="text-center">
        <label className="title mb-0">{title}</label>
        <br />
        <span id="span-subtitle">{caption}</span>
      </div>
    </div>
  );
}

TestimonialsSection.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  items: PropTypes.instanceOf(Array).isRequired,
};

export default TestimonialsSection;
