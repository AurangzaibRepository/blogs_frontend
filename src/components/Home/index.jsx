import React, { useEffect, useState } from 'react';
import HomeService from '../../services/HomeService';
import Title from '../layouts/Title';
import BannerSection from './BannerSection';
import AboutMeSection from './AboutMeSection';
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
      {data
      && (
        <>
          <BannerSection
            title={data.banner.title}
            subTitle={data.banner.sub_title}
          />
          <AboutMeSection
            title={data.about_me.title}
            caption={data.about_me.caption}
            description={data.about_me.description}
          />
        </>
      )}
    </div>
  );
}

export default Home;
