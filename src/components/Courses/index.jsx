import React, { useState, useEffect } from 'react';
import Box from './Box';
import Title from '../layouts/Title';
import CoursesService from '../../services/CoursesService';
import imgReact from '../../assets/road-to-react.png';
import imgRedux from '../../assets/road-to-redux.png';
import imgGraphQL from '../../assets/road-to-graphql.png';
import imgFirebase from '../../assets/road-to-firebase.png';
import './style.css';

function Courses() {
  const [data, setData] = useState();
  const imageList = [
    imgReact,
    imgRedux,
    imgGraphQL,
    imgFirebase,
  ];

  const getData = async () => {
    const courseData = await CoursesService.getData();
    setData(courseData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Title title="Courses" />
      <div className="dv-main pt-4" id="dv-courses">
        <div className="container">
          <div className="row">
            {data
            && (
              data.map((item, index) => (
                <div className="col-md-4 pt-4 mt-1" key={item.id}>
                  <Box
                    title={item.title}
                    image={imageList[index]}
                    imageAlt={item.alt}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
