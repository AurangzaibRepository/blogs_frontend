/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Blog from '../../assets/blogs/blog.png';

function BlogList({ blogs }) {
  return (
    <>
      {blogs.map((item) => (
        <div className="dv-blog mt-4">
          <img src={Blog} alt="Blog" />
        </div>
      ))}
    </>
  );
}

BlogList.propTypes = {
  blogs: PropTypes.instanceOf(Array).isRequired,
};

export default BlogList;
