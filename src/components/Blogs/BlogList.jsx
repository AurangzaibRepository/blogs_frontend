/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Blog from '../../assets/blogs/blog.png';

function BlogList({ blogs }) {
  return (
    <>
      {blogs.map((item) => (
        <div className="dv-blog mt-4 row" key={item.id}>
          <div className="col-md-4 dv-image">
            <img src={Blog} alt="Blog" />
          </div>
          <div className="col-md-8">
            <label className="label-blogtitle">{item.title}</label>
            <br />
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}

BlogList.propTypes = {
  blogs: PropTypes.instanceOf(Array).isRequired,
};

export default BlogList;
