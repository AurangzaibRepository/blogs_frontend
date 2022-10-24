import React from 'react';
import {Helmet} from 'react-helmet';
import PropTypes from 'prop-types';

function Title(props) {
  return <Helmet>
    <title>{props.title}</title>
  </Helmet>;
}

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
