import React from 'react';
import './App.css'; 
import img from './pumpkin.png';
import haunt from './haunted-house.png';

const App = () => {
  return (
    <>
      <div>
        <video
          className="background-video"
          autoPlay
          muted
          loop
          id="background-video"
        >
          <source
            src="https://cdn.pixabay.com/video/2023/10/11/184576-873564667_large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="header">
          <a className="logo-container" href="/">
            <img src={haunt} alt="Logo" className="logo-image" />
            <span className="logo-text">Haunted</span>
          </a>

          <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#blog">Blog</a>
            <a href="#register">Register</a>
            <a href="#visit">Visit Us</a>
          </nav>
        </div>

        <div id="home" className="content">
          <div className="pumpkin-image">
            <img src={img} alt="Pumpkin Icon" />
          </div>
          <h1>Welcome To Happy Halloween Festival</h1>
          <p className="description">
            Join us for a spooky adventure filled with fun, treats, and eerie delights!
          </p>
          <button className="cta-button"><span>Learn More </span></button>
        </div>

        {/* About Section */}
        <div id="about" className="about-section">
          <h2>About Us</h2>
          <p>
            At Haunted, we specialize in bringing the spookiest experiences to life! 
            Our Halloween festival offers thrilling activities, haunted house tours, and eerie delights for all ages.
          </p>
        </div>

      </div>
    </>
  );
};

export default App;
