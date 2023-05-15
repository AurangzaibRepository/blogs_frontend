import React, { useState, useEffect } from 'react';
import ContentsSection from './ContentsSection';
import WorkWithMeService from '../../services/WorkWithMeService';
import Title from '../layouts/Title';

function WorkWithMe() {
  const [data, setData] = useState();

  const getData = async () => {
    const workData = await WorkWithMeService.getData();
    setData(workData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Title title="React Developer" />
      <div className="container dv-main">
        {data
        && (
          <>
            <ContentsSection
              titleClass="title text-center"
              title={data.react_developer.title}
              contents={data.react_developer.body}
            />
            <div className="section-divider" />
            <ContentsSection
              titleClass="title text-center"
              title={data.teaching.title}
              contents={data.teaching.body}
              opportunities={data.teaching.opportunities}
            />
            <div className="section-divider" />
            <ContentsSection
              titleClass="title text-center"
              title={data.working.title}
              contents={data.working.body}
              opportunities={data.working.opportunities}
            />
            <div className="section-divider" />
            <ContentsSection
              titleClass="title text-center"
              title={data.making.title}
              contents={data.making.body}
              opportunities={data.making.opportunities}
            />
            <div className="section-divider" />
            <ContentsSection
              titleClass="title text-center"
              title={data.volunteering.title}
              contents={data.volunteering.body}
              opportunities={data.volunteering.opportunities}
            />
          </>
        )}
      </div>
    </>
  );
}

export default WorkWithMe;
