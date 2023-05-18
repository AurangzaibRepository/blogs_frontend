/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import {
  faGit,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import RoadToReact from '../RoadToReact';
import FooterContents from './FooterContents';
import BrandIcon from './BrandIcon';
import FooterService from '../../services/FooterService';
import './style.css';

function Footer() {
  const [data, setData] = useState();

  const getData = async () => {
    const footerData = await FooterService.getData();
    setData(footerData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="section-divider" />
      <RoadToReact />
      <div className="section-divider" />
      {data
      && (
        <FooterContents
          portfolioLinks={data.portfolio_links}
          aboutLinks={data.about_links}
        />
      )}
      <div id="dv-footer" className="d-flex justify-content-between">
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label className="small">© Robin Wieruch</label>
        <div>
          <BrandIcon
            url="http://www.twitter.com"
            className="me-4"
            icon={faTwitter}
          />
          <BrandIcon
            url="http://www.github.com"
            className="me-4"
            icon={faGit}
          />
          <BrandIcon
            url="http://www.facebook.com"
            className="me-4"
            icon={faFacebook}
          />
          <BrandIcon
            url="mailto:test@gmail.com"
            icon={faMailBulk}
          />
        </div>
        <div>
          <a href="mailto:hello@gmail.com" className="small me-4">Contact Me</a>
          <Link className="small" to="/legal">Privacy & Terms</Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
