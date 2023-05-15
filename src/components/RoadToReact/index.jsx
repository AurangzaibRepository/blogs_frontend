import React from 'react';
import imgReactBook from '../../assets/react-book.png';

function RoadToReact() {
  return (
    <div className="row">
      <div className="col-md-6">
        <img src={imgReactBook} alt="react book" />
      </div>
      <div className="col-md-6">
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label className="full-width title text-center">The Road To React</label>
      </div>
    </div>
  );
}

export default RoadToReact;
