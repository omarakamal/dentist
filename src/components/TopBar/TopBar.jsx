import React from "react";
import { Link } from "react-router-dom";
import "./TopBar.css"; // optional per-component css

export default function TopBar() {
  return (
    <section className="top-bar">
      <div className="container">
        <div className="logo">
          <img
            src="./logo.png"
            alt="Mint Dental logo"
            height={30}
          />
        </div>
        <div className="utility">
          <Link to="/contact" className="btn">Schedule Appointment</Link>
          <span className="phone"><a href="tel:+97317483455">📞 1748 3455</a></span>
        </div>
      </div>
    </section>
  );
}
