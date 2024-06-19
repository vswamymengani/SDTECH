import React , { useState ,useEffect }from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";


import images from './images';
import CustomSlider from './Custom.slider';

import './Home.css';

const Home = () => {
    const [dropdown, setDropdown] = useState(null);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
      
        <div id="a1">
      <div className={`navbar ${isNavbarFixed ? 'navbar-fixed' : ''}`}>
            <div id="a2">
             
      <h2 id="a3">Sevakdigitech.com</h2>
            </div>
            <div>
                    <div className="navbar">
      <div className="menu-item" onMouseEnter={() => handleMouseEnter('home')} onMouseLeave={handleMouseLeave}>
        <Link to="/" className='homeHover'>Home</Link>
        {dropdown === 'home' && (
          <div className="dropdown-menu">
          </div>
        )}
      </div>

      <div className="menu-item" onMouseEnter={() => handleMouseEnter('products')} onMouseLeave={handleMouseLeave}>
        <Link to="/products" className='homeHover'>Products</Link>
        {dropdown === 'products' && (
          <div className="dropdown-menu">
            <Link to="/products" className='homeHover'>SMS</Link>
            <Link to="/products2" className='homeHover'>S2Services</Link>
          </div>
        )}
      </div>

      <div className="menu-item" onMouseEnter={() => handleMouseEnter('solutions')} onMouseLeave={handleMouseLeave}>
        <Link to="/solutions" className='homeHover'>Solutions</Link>
        {dropdown === 'solutions' && (
          <div className="dropdown-menu">
            <Link to="/solutions" className='homeHover'>Our Solutions</Link>
            
          </div>
        )}
      </div>
      </div>
                      </div>
            </div>
            <div className='slidebender'>
              <CustomSlider>
                {images.map((image, index) => {
                  return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
                })}
              </CustomSlider>
            </div>


            <div className="a6">
                <h1 id="a7">About Us</h1>
                <p id="a8">
                    Sevak Digital Technologies is a software development firm specializing in mobile, web and backend development. We deliver innovative and high-quality solutions tailored to meet the unique needs of each client.
                    <br /><br />Sevak Digital Technologies is a reliable and skilled partner for businesses looking for high-quality software solutions. We at Sevak DigiTech, work with a motto of fulfilling our client's requirements to the best possible extent. Our key services include Web design and development with open source platforms.
                    <br /><br />We offer Mobile Application development for small to large-scale enterprises. We started developing and designing Applications in 2023.
                    <br /><br />All of our Apps are custom-designed by top designers and developers, who are all proficient in multiple design platforms. Every Application we create is completely unique and to the exact specifications of each individual client. We ensure nothing but the best products and services with utmost care. Our dynamic work environment helps us offer 24x7x365 support that our Clients require at a much affordable cost.
                </p>
            </div>
            <div id="a9">
                <h1>Our Services</h1>
            </div>
            <div id="a10"></div>
            <div>
                <div>
                    <h1 id="a13">Mobile App Development</h1>
                    <br /><br />
                    <p id="a14">Bringing Mobility to your reach. Apps that are Fast,<br /> Innovative, Affordable</p>
                </div>
                <div id="a11"></div>
                <div>
                    <h1 id="a15">Web Design & Development</h1>
                    <br /><br />
                    <p id="a16">Attract & Engage Clients to your business with creative features. Our websites <br></br> drive your business & Online reputation</p>
                </div>
                <div id="a12"></div>
                <div>
                    <h1 id="a17">AI Solution for Business</h1>
                    <br /><br />
                    <p id="a18">We design and develop AI-powered mobile applications, AI-specific solutions, and intelligent data.</p>
                </div>
                <br />

                <div id='a19'>
                  <h3 style={{color:'aliceblue',textAlign:'left',fontSize:'30px'}}>Copyright @Sevakdigitech&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FaFacebookF color='white' size={40}/>&nbsp;&nbsp;<FaInstagramSquare size={40} />&nbsp;&nbsp;
                    <FaLinkedinIn  size={40}/>&nbsp;&nbsp;<SiYoutubeshorts size={40} />
                  </h3>
                  
                </div>
            </div>
        </div>
    );
};

export default Home;
