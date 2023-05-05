import React, { useEffect, useState } from 'react';
import AboutService from '../../services/AboutService';
import ContentsSection from './ContentsSection';
import Title from '../layouts/Title';

function About() {
  const [aboutData, setAboutData] = useState();
  const [missionData, setMissionData] = useState();
  const [passionData, setPassionData] = useState();

  const getData = async () => {
    const data = await AboutService.getData();
    setAboutData(data.about);
    setMissionData(data.values_and_mission);
    setPassionData(data.passions);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Title title="About" />
      <div className="container dv-main">
        {aboutData
        && (
          <ContentsSection
            title="About Me"
            contents={aboutData}
          />
        )}
        <div className="section-divider" />
        {missionData
        && (
          <ContentsSection
            title="values and misson"
            contents={missionData}
          />
        )}
        <div className="section-divider" />
        {passionData
        && (
          <ContentsSection
            title="passions beyond web development"
            contents={passionData}
          />
        )}
      </div>
    </>
  );
}

export default About;
