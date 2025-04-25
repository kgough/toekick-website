import React from 'react';
import './index.css';
import logo from './logo.png';

function App() {
  return (
    <div className="container">
      <header>
        <img src={logo} alt="Toe Kick Development Logo" className="logo" />
        <h1>TOE KICK</h1>
        <p className="tagline">Real Estate Development Services</p>
        <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section id="about">
        <h2>About Us</h2>
        <p>
          At Toe Kick Development, we are a boutique real estate development firm with over
          75 years of combined experience. We were founded with a simple mission: to support
          owner/developers, investors, and builders who need expert guidance navigating the
          complexities of development—without the overhead of a large firm.
        </p>
        <p>
          Our team includes civil, structural, and geotechnical engineers, architectural designers,
          project managers, and real estate professionals. Whether you need full-service support
          or help with a specific phase—we’re here with practical, tailored solutions.
        </p>
      </section>
      <section id="services">
        <h2>Our Services</h2>
        <ul>
          <li>Entitlements</li>
          <li>Site Work & Street Improvements</li>
          <li>Engineering Services</li>
          <li>Project Management</li>
          <li>Construction Support</li>
          <li>Design & Planning</li>
        </ul>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:kim@toekickdev.com">kim@toekickdev.com</a></p>
        <p>Phone: <a href="tel:4422042466">442-204-2466</a></p>
      </section>
      <footer>
        <p>© {new Date().getFullYear()} Toe Kick Development. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
