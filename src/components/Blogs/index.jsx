/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import Title from '../layouts/Title';
import BlogsService from '../../services/BlogsService';
import BlogList from './BlogList';
import './style.css';

function Blogs() {
  const [data, setData] = useState();

  const getData = async () => {
    const blogsData = await BlogsService.getData();
    setData(blogsData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Title title="Blogs" />
      <div className="dv-main container" id="dv-blogs">
        {data
        && (
          data.blog_categories.map((item, index) => (
            <div className="dv-blogList" key={item.id}>
              <label className="label-category">{item.title}</label>
              <BlogList blogs={item.blogs} />
              {index !== data.blog_categories.length - 1
              && (
                <div className="section-divider" />
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Blogs;
