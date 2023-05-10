/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import {
  faGit,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import './style.css';

function Footer() {
  return (
    <div id="dv-footer" className="d-flex justify-content-between">
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label className="small">© Robin Wieruch</label>
      <div>
        <a href="http://www.twitter.com">
          <FontAwesomeIcon icon={faTwitter} className="me-4" />
        </a>
        <a href="http://www.github.com">
          <FontAwesomeIcon icon={faGit} className="me-4" />
        </a>
        <a href="http://www.github.com">
          <FontAwesomeIcon icon={faFacebook} className="me-4" />
        </a>
        <a href="mailto:test@gmail.com">
          <FontAwesomeIcon icon={faMailBulk} />
        </a>
      </div>
      <div>
        <a href="mailto:hello@gmail.com" className="small me-4">Contact Me</a>
        <a href="/legal" className="small">Privacy & Terms</a>
      </div>
    </div>
  );
}

export default Footer;
