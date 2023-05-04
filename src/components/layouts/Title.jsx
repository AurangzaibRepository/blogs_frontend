/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

function Title({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
