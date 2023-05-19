import React from 'react';
import Title from '../layouts/Title';
import imgBanner from '../../assets/home/banner.jpg';

function Home() {
  return (
    <>
      <Title title="Home" />
      <div className="dv-banner" style={{ backgroundImage: `url(${imgBanner})` }} />
    </>
  );
}

export default Home;
