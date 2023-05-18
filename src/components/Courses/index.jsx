import React from 'react';
import Box from './Box';
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
              <Box
                title="The Road to React"
                image={imgReact}
                imageAlt="react"
              />
            </div>
            <div className="col-md-4">
              <Box
                title="The Road to Redux"
                image={imgRedux}
                imageAlt="redux"
              />
            </div>
            <div className="col-md-4">
              <Box
                title="The Road to GraphQL"
                image={imgGraphQL}
                imageAlt="graphql"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
