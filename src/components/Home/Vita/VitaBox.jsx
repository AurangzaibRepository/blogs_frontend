/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Vita1 from '../../../assets/home/vita1.jpg';
import Vita2 from '../../../assets/home/vita2.jpg';
import Vita3 from '../../../assets/home/vita3.jpg';
import Vita4 from '../../../assets/home/vita4.jpg';
import Vita5 from '../../../assets/home/vita5.jpg';
import Vita6 from '../../../assets/home/vita6.jpg';
import Vita7 from '../../../assets/home/vita7.jpg';
import Vita8 from '../../../assets/home/vita8.jpg';
import Vita9 from '../../../assets/home/vita9.jpg';

function VitaBox() {
  return (
    <div className="row mt-4">
      {items.map((item, index) => (
        <div className="col-md-4 mt-5">
          <img src={imageList[index]} alt="Vita" />
          <br />
          <label className="sub-title mb-0 label-year">{item.year}</label>
          <br />
          <label className="sub-title mt-0 mb-4">{item.title}</label>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default VitaBox;
