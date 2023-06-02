/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext } from 'react';
import AppContext from '../../layouts/AppContext';
import Testimonial1 from '../../../assets/home/testimonial1.jpg';
import Testimonial2 from '../../../assets/home/testimonial2.jpg';
import Testimonial3 from '../../../assets/home/testimonial3.jpg';
import Testimonial4 from '../../../assets/home/testimonial4.jpg';
import Testimonial5 from '../../../assets/home/testimonial5.jpg';
import Testimonial6 from '../../../assets/home/testimonial6.jpg';
import Testimonial7 from '../../../assets/home/testimonial7.jpg';

function TestimonialBox() {
  const { items } = useContext(AppContext);
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
    <div className="row mt-4 justify-content-center">
      {items.map((item, index) => (
        <div className="col-md-4 mt-5" key={item.id}>
          <img src={imageList[index]} alt="Testimonial" />
          <br />
          <label className="sub-title mb-0">{item.title}</label>
          <br />
          <label className="label-post mt-0 mb-4">{item.post}</label>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TestimonialBox;
