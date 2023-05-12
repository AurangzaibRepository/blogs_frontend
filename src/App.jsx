import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Home from './components/Home';
import Blogs from './components/Blogs';
import About from './components/About';
import WorkWithMe from './components/WorkWithMe';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/work-with-me" element={<WorkWithMe />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
