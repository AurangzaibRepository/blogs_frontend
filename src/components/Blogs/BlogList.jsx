/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import BlogBox from './BlogBox';

function BlogList({ blogs }) {
  return (
    <>
      {blogs.map((item) => (
        
      ))}
    </>
  );
}

BlogList.propTypes = {
  blogs: PropTypes.instanceOf(Array).isRequired,
};

export default BlogList;
