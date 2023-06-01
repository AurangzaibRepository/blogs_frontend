/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function VitaSection({ title, caption }) {
  return (
    <div id="dv-vita">
      <div className="text-center">
      </div>
    </div>
  );
}

VitaSection.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default VitaSection;
