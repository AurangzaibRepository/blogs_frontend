/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Vita1 from '../../../assets/home/vita1.jpg';
import Vita2 from '../../../assets/home/vita2.jpg';
import Vita3 from '../../../assets/home/vita3.jpg';
import Vita4 from '../../../assets/home/vita4.jpg';
import Vita5 from '../../../assets/home/vita5.jpg';
import Vita6 from '../../../assets/home/vita6.jpg';
import Vita7 from '../../../assets/home/vita7.jpg';
import Vita8 from '../../../assets/home/vita8.jpg';
import Vita9 from '../../../assets/home/vita9.jpg';

const imageList = [
  Vita1,
  Vita2,
  Vita3,
  Vita4,
  Vita5,
  Vita6,
  Vita7,
  Vita8,
  Vita9,
];

function VitaSection({
  title,
  caption,
  items,
}) {
  return (
    <div id="dv-vita">
      <div className="text-center">
        <label className="title mb-0">{title}</label>
        <br />
        <span id="span-subtitle">{caption}</span>
        <div className="row mt-4">
          {items.map((item, index) => (
            <div className="col-md-4 mt-5">
              <img src={imageList[index]} alt="Vita" />
              <br />
              <label className="sub-title mb-0">{item.year}</label>
              <br />
              <label className="sub-title mt-0">{item.title}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

VitaSection.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  items: PropTypes.instanceOf(Array).isRequired,
};

export default VitaSection;
