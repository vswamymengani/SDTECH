
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Solutions from './Solutions';
import Careers from './Careers';
import Blog from './Blog';
import AboutUs from './AboutUs';
import Training from './Training';
import './App.css';
import ContactUs from './ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;