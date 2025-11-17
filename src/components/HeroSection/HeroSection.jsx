import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section id="hero-section">
    <div id="hero-container">
      <h1 className="hero-text">Welcome to Al Safa Dental Center</h1>
      <h2 className="hero-text fade-in">Your Trusted Dental Team in Bahrain</h2>
      <ul>
        <li className="hero-text"><a href="tel:+97317483455">Call: 1748 3455</a></li>
        <li className="hero-text"> <a href="https://wa.me/966593322610?text=Hello%2C%20I%27d%20like%20to%20book%20a%20dental%20appointment%21" target="_blank" rel="noopener noreferrer">WhatsApp: +973 17483455</a></li>
      </ul>
      <Link className="hero-text main-button" to="/contact">Book Online</Link>

    </div>
  </section>
);

export default HeroSection;
