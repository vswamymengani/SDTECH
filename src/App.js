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
import ContactUs1 from './ContactUs1';
import { Products2 } from './Products2';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products2" element={<Products2 />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/contactus1" element={<ContactUs1 />} />
      </Routes>
    </Router>
  );
}

export default App;