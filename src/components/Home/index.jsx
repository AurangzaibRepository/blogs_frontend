import React from 'react';
import Title from '../layouts/Title';
import imgBanner from '../../assets/home/banner.jpg';
import './style.css';

function Home() {
  return (
    <div id="dv-home">
      <Title title="Home" />
      <div id="dv-banner" style={{ backgroundImage: `url(${imgBanner})` }}>
        <div className="text-center">
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label id="label-title">Robin Wieruch</label>
          <br />
          <span id="span-subtitle">German Software Engineer for React.js, Node.js and GraphQL</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
