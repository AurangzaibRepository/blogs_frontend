import React from 'react';
import imgReactBook from '../../assets/react-book.png';
import './style.css';

function RoadToReact() {
  return (
    <div className="row" id="dv-roadtoreact">
      <div className="col-md-6 text-center">
        <img src={imgReactBook} alt="react book" />
      </div>
      <div className="col-md-6 text-center">
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label className="full-width title text-center">The Road To React</label>
        <p>
          Learn React by building real world applications. No setup configuration. No tooling.
          Plain React in 200+ pages of learning material. Learn React like 50.000+ readers.
        </p>
      </div>
    </div>
  );
}

export default RoadToReact;
