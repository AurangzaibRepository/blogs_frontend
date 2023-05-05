import React, { useEffect, useState } from 'react';
import AboutService from '../../services/AboutService';
import ContentsSection from './ContentsSection';
import Title from '../layouts/Title';

function About() {
  const [aboutData, setAboutData] = useState();
  const [missionData, setMissionData] = useState();
  const [passionData, setPassionData] = useState();
  const [supportData, setSupportData] = useState();
  const [followMeData, setFollowMeData] = useState();

  const getData = async () => {
    const data = await AboutService.getData();
    setAboutData(data.about);
    setMissionData(data.values_and_mission);
    setPassionData(data.passions);
    setSupportData(data.support);
    setFollowMeData(data.follow_me);
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
            titleClass="title text-center"
            title="About Me"
            contents={aboutData}
          />
        )}
        <div className="section-divider" />
        {missionData
        && (
          <ContentsSection
            titleClass="title text-center"
            title="values and misson"
            contents={missionData}
          />
        )}
        <div className="section-divider" />
        {passionData
        && (
          <ContentsSection
            titleClass="title text-center"
            title="passions beyond web development"
            contents={passionData}
          />
        )}
        <div className="section-divider" />
        {supportData
        && (
          <ContentsSection
            titleClass="title text-center"
            title="You like my content? Here are a couple of ways to support it."
            contents={supportData}
          />
        )}
        {followMeData
        && (
          <ContentsSection
            titleClass="sub-title"
            title="Follow Me"
            contents={followMeData}
          />
        )}
      </div>
    </>
  );
}

export default About;
