import React from 'react';
import Title from '../layouts/Title';
import './style.css';

function Courses() {
  return (
    <>
      <Title title="Courses" />
      <div className="dv-main" id="dv-courses">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="dv-box">
                { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
                <label>The Road to React</label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="dv-box">
                { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
                <label>The Road to Redux</label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="dv-box">
                { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
                <label>The Road to GraphQL</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
