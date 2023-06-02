import React, { useEffect, useMemo, useState } from 'react';
import HomeService from '../../services/HomeService';
import Title from '../layouts/Title';
import BannerSection from './BannerSection';
import AboutMeSection from './AboutMe';
import WhatIOfferSection from './WhatIOffer';
import PortfolioSection from './Portfolio';
import VitaSection from './Vita';
import TestimonialsSection from './Testimonials';
import AppContext from '../layouts/AppContext';
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

  const itemList = useMemo(() => ({ items: data ? data.portfolio.items : [] }), [data]);
  const vitaItems = useMemo(() => ({ items: data ? data.vita.items : [] }), [data]);

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
          <div className="container dv-main pt-5 pb-5">
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
            <div className="section-divider" />
            <AppContext.Provider value={itemList}>
              <PortfolioSection
                title={data.portfolio.title}
                caption={data.portfolio.caption}
              />
            </AppContext.Provider>
            <div className="section-divider" />
            <AppContext.Provider value={vitaItems}>
              <VitaSection
                title={data.vita.title}
                caption={data.vita.caption}
              />
            </AppContext.Provider>
            <div className="section-divider" />
            <TestimonialsSection
              title={data.testimonials.title}
              caption={data.testimonials.caption}
              items={data.testimonials.items}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
