import React from 'react';
import Title from '../layouts/Title';
import imgReact from '../../assets/road-to-react.png';
import imgRedux from '../../assets/road-to-redux.png';
import imgGraphQL from '../../assets/road-to-graphql.png';
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
                <label className="title">The Road to React</label>
                <img src={imgReact} alt="react" />
                { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
                <label className="label-unlock">Unlock Course</label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="dv-box">
                { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
                <label className="title">The Road to Redux</label>
                <img src={imgRedux} alt="redux" />
                { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
                <label className="label-unlock">Unlock Course</label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="dv-box">
                { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
                <label className="title">The Road to GraphQL</label>
                <img src={imgGraphQL} alt="graphql" />
                { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
                <label className="label-unlock">Unlock Course</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
