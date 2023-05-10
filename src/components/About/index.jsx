import React, { useEffect, useState } from 'react';
import AboutService from '../../services/AboutService';
import ContentsSection from './ContentsSection';
import PassionsSection from './PassionsSection';
import SupportSection from './SupportSection';
import WhatUseSection from './WhatUseSection';
import Title from '../layouts/Title';

function About() {
  const [aboutData, setAboutData] = useState();
  const [missionData, setMissionData] = useState();
  const [passionData, setPassionData] = useState();
  const [supportData, setSupportData] = useState();
  const [whatUseData, setWhatUseData] = useState();

  const getData = async () => {
    const data = await AboutService.getData();
    setAboutData(data.about);
    setMissionData(data.values_and_mission);
    setPassionData(data.passions);
    setSupportData(data.support);
    setWhatUseData(data.what_use);
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
          <PassionsSection
            body={passionData.body}
            watching={passionData.watching}
            noteworthy={passionData.noteworthy}
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
        <div className="section-divider" />
        {whatUseData
        && (
          <WhatUseSection
            body={whatUseData.body}
            digitalOcean={whatUseData.digital_ocean}
            email={whatUseData.email}
            technicalGear={whatUseData.technical_gear}
            apps={whatUseData.apps}
            freelancers={whatUseData.freelancers}
            newsletter={whatUseData.newsletter}
            emailMarketing={whatUseData.email_marketing}
          />
        )}
      </div>
    </>
  );
}

export default About;
