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
      </div>
    </>
  );
}

export default Blogs;
