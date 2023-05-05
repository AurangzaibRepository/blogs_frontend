import React, { useEffect, useState } from 'react';
import Title from '../layouts/Title';

function About() {
  const [aboutData, setAboutData] = useState();

  return (
    <>
      <Title title="About" />
      <div className="container dv-main">
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label className="title full-width text-center">About Me</label>
        <p>{aboutData}</p>
      </div>
    </>
  );
}

export default About;
