import React from 'react';
import PropTypes from 'prop-types';

function BlogList({ blogs }) {
  return (
    {blogs.map((item) => (
      <div className="dv-blog"></div>
    ))}
  );
}

BlogList.propTypes = {
  blogs: PropTypes.instanceOf(Array).isRequired,
};

export default BlogList;
