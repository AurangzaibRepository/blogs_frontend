/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Testimonial1 from '../../../assets/home/testimonial1.jpg';
import Testimonial2 from '../../../assets/home/testimonial2.jpg';
import Testimonial3 from '../../../assets/home/testimonial3.jpg';
import Testimonial4 from '../../../assets/home/testimonial4.jpg';
import Testimonial5 from '../../../assets/home/testimonial5.jpg';
import Testimonial6 from '../../../assets/home/testimonial6.jpg';
import Testimonial7 from '../../../assets/home/testimonial7.jpg';

function TestimonialBox({ items }) {
  const imageList = [
    Testimonial1,
    Testimonial2,
    Testimonial3,
    Testimonial4,
    Testimonial5,
    Testimonial6,
    Testimonial7,
  ];

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
