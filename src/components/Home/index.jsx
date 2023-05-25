import React, { useEffect, useState } from 'react';
import HomeService from '../../services/HomeService';
import Title from '../layouts/Title';
import BannerSection from './BannerSection';
import './style.css';

function Home() {
  const [data, setData] = useState();

  const getData = async () => {
    const homeData = await HomeService.getData();
    setData(homeData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="dv-home">
      <Title title="Home" />
    </div>
  );
}

export default Home;
