/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

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
