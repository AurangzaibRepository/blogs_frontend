import React from 'react';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faGit,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import BrandIcon from '../../Footer/BrandIcon';

function Icons() {
  return (
    <div className="mt-4 pt-3">
      <BrandIcon
        url="https://www.twitter.com"
        className="me-4 pe-2"
        icon={faTwitter}
      />
      <BrandIcon
        url="https://www.github.com"
        className="me-4 pe-2"
        icon={faGit}
      />
      <BrandIcon
        url="https://www.facebook.com"
        className="me-4 pe-2"
        icon={faFacebook}
      />
      <BrandIcon
        url="mailto:test@gmail.com"
        icon={faMailBulk}
      />
    </div>
  );
}

export default Icons;
