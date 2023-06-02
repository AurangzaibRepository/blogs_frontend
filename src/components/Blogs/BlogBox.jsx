/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Blog from '../../assets/blogs/blog.png';

function BlogBox({ title, description }) {
  return (
    <div className="dv-blog mt-4 row">
      <div className="col-md-4 dv-image">
        <img src={Blog} alt="Blog" />
      </div>
      <div className="col-md-8">
        <label className="label-blogtitle sub-title mt-0">{title}</label>
        <br />
        <p>{description}</p>
      </div>
    </div>
  );
}

BlogBox.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BlogBox;
