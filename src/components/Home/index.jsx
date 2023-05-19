import React from 'react';
import Title from '../layouts/Title';
import imgBanner from '../../assets/home/banner.jpg';

function Home() {
  return (
    <div id="dv-home">
      <Title title="Home" />
      <div id="dv-banner" style={{ backgroundImage: `url(${imgBanner})` }} />
    </div>
  );
}

export default Home;
