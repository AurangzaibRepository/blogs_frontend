import React, { useEffect, useState } from 'react';
import HomeService from '../../services/HomeService';
import Title from '../layouts/Title';
import BannerSection from './BannerSection';
import AboutMeSection from './AboutMe';
import WhatIOfferSection from './WhatIOffer';
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
          <div className="container dv-main pt-5">
            <AboutMeSection
              title={data.about_me.title}
              caption={data.about_me.caption}
              description={data.about_me.description}
            />
            <div className="section-divider" />
            <WhatIOfferSection
              title={data.what_i_offer.title}
              caption={data.what_i_offer.caption}
              items={data.what_i_offer.items}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
