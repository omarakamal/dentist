import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <header className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="container">
        <div
          className="burger"
          onClick={() => setMenuOpen((s) => !s)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setMenuOpen((s) => !s); }}
        >
          ☰
        </div>

        <nav>
          <ul className="nav-links">
            <li><NavLink to="/" end className={({isActive}) => isActive ? "active" : undefined}>Home</NavLink></li>
            <li><NavLink to="/about" className={({isActive}) => isActive ? "active" : undefined}>About</NavLink></li>
            <li><NavLink to="/services" className={({isActive}) => isActive ? "active" : undefined}>Services</NavLink></li>
            <li><NavLink to="/contact" className={({isActive}) => isActive ? "active" : undefined}>Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
