import React from 'react';
import Title from '../layouts/Title';
import imgBanner from '../../assets/home/banner.jpg';
import './style.css';

function Home() {
  return (
    <div id="dv-home">
      <Title title="Home" />
      <div id="dv-banner" style={{ backgroundImage: `url(${imgBanner})` }}>
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label className="label-title">Robin Wieruch</label>
      </div>
    </div>
  );
}

export default Home;
