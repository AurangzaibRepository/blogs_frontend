import React from 'react';
import {Routes, Route} from 'react-router-dom';
import NavBar from './navbar.component';
import BlogList from '../../blogs/blog-list.component';
import MostLikedBlogs from '../../blogs/most-liked.component';
import MostCommentedBlogs from '../../blogs/most-commented.component';
import styles from './style.module.css';

function Menu() {
  return <div id={styles['dv-topmenu']}>
    <NavBar />
    <div>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/most-liked" element={<MostLikedBlogs />} />
        <Route path="/most-commented" element={<MostCommentedBlogs />} />
      </Routes>
    </div>
  </div>;
}

export default Menu;
