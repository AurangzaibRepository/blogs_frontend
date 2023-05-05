import React, { useEffect, useState } from 'react';
import AboutService from '../../services/AboutService';
import Title from '../layouts/Title';

function About() {
  const [aboutData, setAboutData] = useState();

  const getData = async () => {
    const data = await AboutService.getData();
    setAboutData(data.about);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Title title="About" />
      <div className="container dv-main">
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label className="title full-width text-center">About Me</label>
        <p>{aboutData}</p>
      </div>
    </>
  );
}

export default About;
