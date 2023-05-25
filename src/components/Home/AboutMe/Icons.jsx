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
    <div className="mt-3">
      <BrandIcon
        className="me-4"
        icon={faTwitter}
      />
      <BrandIcon
        className="me-4"
        icon={faGit}
      />
      <BrandIcon
        className="me-4"
        icon={faFacebook}
      />
      <BrandIcon
        icon={faMailBulk}
      />
    </div>
  );
}

export default Icons;