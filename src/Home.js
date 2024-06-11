import React , { useState }from 'react';
import { Link } from 'react-router-dom';


import './Home.css';

const Home = () => {
    const [dropdown, setDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };
    
    return (
        <div id="a1">
            <div id="a2">
                <h2 id="a3">Sevakdigitech.com</h2>
            </div>
            <div>
                {/* <div className="navbar"> */}
                    {/* <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/products">Products</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/solutions">Solutions</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/careers">Careers</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/blog">Blog</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/aboutUs">AboutUs</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/training">Training</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/contactus">ContactUs</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                    <div className="navbar">
      <div className="menu-item" onMouseEnter={() => handleMouseEnter('home')} onMouseLeave={handleMouseLeave}>
        <Link to="/">Home</Link>
        {dropdown === 'home' && (
          <div className="dropdown-menu">
            {/* <Link to="/subpage1">Subpage 1</Link>
            <Link to="/subpage2">Subpage 2</Link> */}
          </div>
        )}
      </div>

      <div className="menu-item" onMouseEnter={() => handleMouseEnter('products')} onMouseLeave={handleMouseLeave}>
        <Link to="/products">Products</Link>
        {dropdown === 'products' && (
          <div className="dropdown-menu">
            <Link to="/products">SMS</Link>
            <Link to="/products2">S2Services</Link>
          </div>
        )}
      </div>

      <div className="menu-item" onMouseEnter={() => handleMouseEnter('solutions')} onMouseLeave={handleMouseLeave}>
        <Link to="/solutions">Solutions</Link>
        {dropdown === 'solutions' && (
          <div className="dropdown-menu">
            <Link to="/solutions">Our Solutions</Link>
            
          </div>
        )}
      </div>

      <div className="menu-item" onMouseEnter={() => handleMouseEnter('careers')} onMouseLeave={handleMouseLeave}>
        <Link to="/careers">Careers</Link>
        {dropdown === 'careers' && (
          <div className="dropdown-menu">
            <Link to="/careers">Career 1</Link>
            <Link to="/career2">Career 2</Link>
          </div>
        )}
      </div>

      <div className="menu-item" onMouseEnter={() => handleMouseEnter('blog')} onMouseLeave={handleMouseLeave}>
        <Link to="/blog">Blog</Link>
        {dropdown === 'blog' && (
          <div className="dropdown-menu">
            <Link to="/blog">Post 1</Link>
            <Link to="/post2">Post 2</Link>
          </div>
        )}
      </div>

      <div className="menu-item" onMouseEnter={() => handleMouseEnter('aboutUs')} onMouseLeave={handleMouseLeave}>
        <Link to="/aboutUs">About Us</Link>
        {dropdown === 'aboutUs' && (
          <div className="dropdown-menu">
            <Link to="/aboutus">Objective</Link>
           
          </div>
        )}
      </div>

      <div className="menu-item" onMouseEnter={() => handleMouseEnter('training')} onMouseLeave={handleMouseLeave}>
        <Link to="/training">Training</Link>
        {dropdown === 'training' && (
          <div className="dropdown-menu">
            <Link to="/training">Corporate Training</Link>
            <Link to="/course2">Interships list</Link>
          </div>
        )}
      </div>

      <div className="menu-item" onMouseEnter={() => handleMouseEnter('contactus')} onMouseLeave={handleMouseLeave}>
        <Link to="/contactus">Contact Us</Link>
        {dropdown === 'contactus' && (
          <div className="dropdown-menu">
            <Link to="/contactus">Register Address</Link>
            <Link to="/contactus1">Corporate Office</Link>
          </div>
        )}
      </div>
    {/* </div> */}
                    
                </div>
            </div>
            <div id="a4">
                <div>
                    <div>
                        <h1 id="a5"><br /><br /><br /><br /><br /><br /><br />One Stop Digital Tech Solution</h1>
                    </div>
                </div>
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
                    <p id="a14">Bringing Mobility to your reach. Apps that are Fast, Innovative, Affordable</p>
                </div>
                <div id="a11"></div>
                <div>
                    <h1 id="a15">Web Design & Development</h1>
                    <br /><br />
                    <p id="a16">Attract & Engage Clients to your business with creative features. Our websites drive <br></br>your business & Online reputation</p>
                </div>
                <div id="a12"></div>
                <div>
                    <h1 id="a17">AI Solution for Business</h1>
                    <br /><br />
                    <p id="a18">We design and develop AI-powered mobile applications, AI-specific solutions, and intelligent data.</p>
                </div>
                <br />
                <div id="a19">
                    <h3 id="a20"><br /><center>Copyright @Sevakdigitech</center></h3>
                </div>
            </div>
        </div>
    );
};

export default Home;