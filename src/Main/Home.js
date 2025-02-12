import React, { useState } from 'react';
import './App.css';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import HH from './HH.png';
import img from './pumpkin.png';
import haunt from './haunted-house.png';
import img1 from './witch.png';
import img2 from './ghost.png';
import img3 from './bats.png';
import blogImg1 from './blog1.jpg';
import blogImg2 from './blog2.jpg';
import blogImg3 from './blog3.jpg';
import video from './HauntedVideo.mp4';

const App = () => {
  const [eventHovered, setEventHovered] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event: '',
  });

  const handleEventHover = (index) => setEventHovered(index);
  const handleEventLeave = () => setEventHovered(null);

  const scrollToRegister = () => {
    const registerSection = document.getElementById('register');
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration Form Submitted:', formData);
  };

  return (
    <>
      <div>
        <div id="home">
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

          <div className="content">
            <div className="pumpkin-image">
              <img src={img} alt="Pumpkin Icon" />
            </div>
            <h1 className='head'>Welcome To Happy Halloween Festival</h1>
            <p className="description">
              Join us for a spooky adventure filled with fun, treats, and eerie delights!
            </p>
            <button className="cta-button" onClick={scrollToRegister}><span>Learn More </span></button>
          </div>
        </div>

        <div id="about" className="about-section">
          <div className="about-video-container">
            <video
              className="about-background-video"
              autoPlay
              muted
              loop
              id="about-background-video"
            >
              <source
                src="https://videos.pexels.com/video-files/5780924/5780924-hd_1920_1080_30fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="about-content">
            <h2 className="about-title">About Us</h2>
            <p className="about-description">
              At Haunted, we specialize in bringing the spookiest experiences to life! 
              Our Halloween festival offers thrilling activities, haunted house tours, and eerie delights for all ages.
            </p>
            <div className="about-images">
              <img src={img1} alt="Image1" className="about-image" />
            </div>
          </div>
        </div>

        <div id="services" className="events-section">
          <div className="events-video-container">
            <video
              className="events-background-video"
              autoPlay
              muted
              loop
              id="events-background-video"
            >
              <source
                src={video}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="events-content">
            <h2 className="events-title">Halloween Events</h2>
            <div className="events-cards">
              <div
                className="event-card"
                onMouseEnter={() => handleEventHover(1)}
                onMouseLeave={handleEventLeave}
              >
                <img src={img2} alt="Event 1" className="event-img" />
                <div className="event-content">
                  <h3>Spooky Haunted House</h3>
                  <p>Step into our haunted house filled with surprises and eerie scenes!</p>
                  {eventHovered === 1 && <button className="cta-button" onClick={scrollToRegister}>Register Now</button>}
                </div>
              </div>

              <div
                className="event-card"
                onMouseEnter={() => handleEventHover(2)}
                onMouseLeave={handleEventLeave}
              >
                <img src={img3} alt="Event 2" className="event-img" />
                <div className="event-content">
                  <h3>Witch's Potion Class</h3>
                  <p>Learn to brew the most magical potions in our witch's class!</p>
                  {eventHovered === 2 && <button className="cta-button" onClick={scrollToRegister}>Register Now</button>}
                </div>
              </div>

              <div
                className="event-card"
                onMouseEnter={() => handleEventHover(3)}
                onMouseLeave={handleEventLeave}
              >
                <img src={img1} alt="Event 3" className="event-img" />
                <div className="event-content">
                  <h3>Zombie Dance Party</h3>
                  <p>Join us for a spooky dance-off with the undead!</p>
                  {eventHovered === 3 && <button className="cta-button" onClick={scrollToRegister}>Register Now</button>}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="blog" className="blog-section">
          <div className="blog-video-container">
            <video
              className="blog-background-video"
              autoPlay
              muted
              loop
              id="blog-background-video"
            >
              <source
                src="https://media.istockphoto.com/id/1649194035/video/spooky-house-on-halloween-night-haunted-house-in-night-scary-forest.mp4?s=mp4-640x640-is&k=20&c=N3bSUBYgs27KBJcJboSJtCPir9zckzjNfxHWfhcrcK8="
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="blog-content">
            <h2 className="blog-title">Our Latest Blog Posts</h2>
            <div className="blog-cards">
              <div className="blog-card">
                <img src={blogImg1} alt="Blog 1" className="blog-image" />
                <div className="blog-details">
                  <h3>How to Plan the Ultimate Halloween Party</h3>
                  <p>Get ready for a spooky season with our top tips for planning the best Halloween party!</p>
                  <button className="cta-button">Read More</button>
                </div>
              </div>
              <div className="blog-card">
                <img src={blogImg3} alt="Blog 1" className="blog-image" />
                <div className="blog-details">
                  <h3>How to Plan the Ultimate Halloween Party</h3>
                  <p>Get ready for a spooky season with our top tips for planning the best Halloween party!</p>
                  <button className="cta-button">Read More</button>
                </div>
              </div>


              <div className="blog-card">
                <img src={blogImg2} alt="Blog 2" className="blog-image" />
                <div className="blog-details">
                  <h3>DIY Halloween Decorations</h3>
                  <p>Create your own creepy ambiance with these easy and fun DIY decoration ideas!</p>
                  <button className="cta-button">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="register" className="register-section">
          <h2>Register for Halloween Festival</h2>
          <p>Don't miss out on any spooky fun—register now!</p>

          <div className="registration-container">
            <div className="registration-image">
              <img src={img1} alt="Halloween" />
            </div>

            <div className="registration-form">
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="event">Select Event</label>
                <select
                  id="event"
                  name="event"
                  value={formData.event}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select an event</option>
                  <option value="haunted-house">Haunted House</option>
                  <option value="witchs-class">Witch's Potion Class</option>
                  <option value="zombie-party">Zombie Dance Party</option>
                </select>

                <button type="submit" className="cta-button">Register Now</button>
              </form>
            </div>
          </div>
        </div>
        <footer className="bg-black text-orange-500 py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <motion.img
          src={HH}
          alt="Halloween Pumpkin"
          className="w-24 h-24 md:w-36 md:h-36"
          animate={{ rotateY: [0, 360] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        />

        <div className="text-center md:text-left mt-4 md:mt-0">
          <h2 className="text-lg font-semibold">Halloween Night Party</h2>
          <p className="text-sm mt-2 text-orange-400">
            Join us for a spooky night full of fun, games, and horror! Get ready to experience the best Halloween bash in town!
          </p>
          <p className="text-sm mt-2 text-orange-400 flex items-center"><FaMapMarkerAlt className="mr-2" /> Haunted House, Spooky Street, Ghost Town</p>
          <p className="text-sm mt-1 text-orange-400 flex items-center"><FaEnvelope className="mr-2" /> halloween@party.com</p>
          <p className="text-sm mt-1 text-orange-400 flex items-center"><FaPhone className="mr-2" /> +666 666 6666</p>
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="/" className="text-orange-400 hover:text-white text-2xl"><FaFacebook /></a>
          <a href="/" className="text-orange-400 hover:text-white text-2xl"><FaTwitter /></a>
          <a href="/" className="text-orange-400 hover:text-white text-2xl"><FaInstagram /></a>
          <a href="/" className="text-orange-400 hover:text-white text-2xl"><FaLinkedin /></a>
          <a href="/" className="text-orange-400 hover:text-white text-2xl"><FaYoutube /></a>
          <a href="/" className="text-orange-400 hover:text-white text-2xl"><FaGithub /></a>
        </div>
      </div>

      <div className="text-center text-orange-400 text-sm mt-6">
        <a href="/" className="hover:text-white mx-2">Costume Contest</a> | 
        <a href="/" className="hover:text-white mx-2">Haunted Maze</a> | 
        <a href="/" className="hover:text-white mx-2">Scary Stories</a> | 
        <a href="/" className="hover:text-white mx-2">Pumpkin Carving</a> | 
        <a href="/" className="hover:text-white mx-2">Spooky Playlist</a>
      </div>

      <div className="text-center text-orange-400 text-sm mt-6">
        <h2 className="text-lg font-semibold text-orange-500">RSVP for the Party!</h2>
        <input type="email" placeholder="Enter your email" className="mt-2 p-2 rounded bg-gray-800 border border-orange-700 text-white" />
        <button className="ml-2 p-2 text-white bg-orange-500 rounded hover:bg-orange-600">Confirm Attendance</button>
      </div>

      <div className="text-center text-orange-500 text-sm mt-4">
        &copy; {new Date().getFullYear()} Halloween Party. All rights reserved.
      </div>
    </footer>
     </div>
    </>
  );
};

export default App;
