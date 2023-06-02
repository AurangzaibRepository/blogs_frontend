/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import Title from '../layouts/Title';
import BlogsService from '../../services/BlogsService';

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
          data.blog_categories.map((item) => (
            <>
              <div className="dv-blogList" key={item.id}>
                <label className="label-category">{item.title}</label>
              </div>
              <div className="section-divider" />
            </>
          ))
        )}
      </div>
    </>
  );
}

export default Blogs;
