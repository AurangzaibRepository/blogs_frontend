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
          <ContentsSection
            titleClass="title text-center"
            title="React Developer"
            contents={data.react_developer}
          />
        )}
      </div>
    </>
  );
}

export default WorkWithMe;
