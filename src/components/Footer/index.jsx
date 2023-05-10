import React from 'react';
import './style.css';

function Footer() {
  return (
    <div id="dv-footer" className="d-flex justify-content-between">
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label className="small">© Robin Wieruch</label>
      <div>
        icons
      </div>
      <div>
        <a href="mailto:hello@gmail.com" className="small me-4">Contact Me</a>
        <a href="/legal" className="small">Privacy & Terms</a>
      </div>
    </div>
  );
}

export default Footer;
