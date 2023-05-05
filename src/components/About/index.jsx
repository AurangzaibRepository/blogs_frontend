import React, { useEffect, useState } from 'react';
import AboutService from '../../services/AboutService';
import ContentsSection from './ContentsSection';
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
        <ContentsSection
          title="About Me"
          contents={aboutData}
        />
      </div>
    </>
  );
}

export default About;
