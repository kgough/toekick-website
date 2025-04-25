import React from 'react';
import './index.css';
import logo from './logo.png';

function App() {
  return (
    <div className="container">
      <header className="fade-in">
        <img src={logo} alt="Toe Kick Logo" className="logo" />
        <h1>Toe Kick Development</h1>
        <p className="tagline">Real Estate Development & Advisory</p>
        <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="about" className="fade-in">
          <h2>About Us</h2>
          <p>
            Toe Kick Development is a boutique real estate firm with over 75 years of combined experience.
            We partner with developers, investors, and owner-builders who need expert, cost-effective support
            navigating the complexities of real estate development. From dirt to keys or strategic consulting,
            we bring clarity, speed, and quality.
          </p>
        </section>
        <section id="services" className="fade-in">
          <h2>Our Services</h2>
          <ul>
            <li>Entitlements & Permitting</li>
            <li>Civil & Structural Engineering</li>
            <li>On-Site Project Management</li>
            <li>Street Work & Infrastructure</li>
            <li>Design & Planning</li>
            <li>Construction Oversight</li>
          </ul>
        </section>
        <section id="contact" className="fade-in">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:kim@toekickdev.com">kim@toekickdev.com</a></p>
          <p>Phone: <a href="tel:4422042466">442-204-2466</a></p>
        </section>
      </main>
      <footer className="fade-in">
        <p>© {new Date().getFullYear()} Toe Kick Development. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
