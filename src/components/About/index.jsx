import React, { useEffect, useState } from 'react';
import AboutService from '../../services/AboutService';
import ContentsSection from './ContentsSection';
import SupportSection from './SupportSection';
import Title from '../layouts/Title';

function About() {
  const [aboutData, setAboutData] = useState();
  const [missionData, setMissionData] = useState();
  const [passionData, setPassionData] = useState();
  const [supportData, setSupportData] = useState();

  const getData = async () => {
    const data = await AboutService.getData();
    setAboutData(data.about);
    setMissionData(data.values_and_mission);
    setPassionData(data.passions);
    setSupportData(data.support);
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
          <SupportSection
            body={supportData.description}
            followMe={supportData.follow_me}
            leaveReview={supportData.leave_review}
            share={supportData.share}
            learnReact={supportData.learn_react}
            contribute={supportData.contribute}
            donate={supportData.donate}
          />
        )}
      </div>
    </>
  );
}

export default About;
