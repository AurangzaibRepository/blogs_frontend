import React, { useState, useEffect } from 'react';
import ContentsSection from '../About/ContentsSection';
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
      </div>
    </>
  );
}

export default WorkWithMe;
