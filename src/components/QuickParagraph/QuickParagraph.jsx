import React from "react";
import "./QuickParagraph.css";
import { Link } from "react-router-dom";

const QuickParagraph = () => (
  <section id="quick-paragraph">
    <div id="container">
      <h2>Treat yourself to exceptional dentistry</h2>
      <p>Our team at Leduc Dental Centre consists of dedicated and passionate over-achievers who love working with patients to help them experience optimal dental health and overall well-being. We meet you where you are, focusing on your values and personal needs to make dental care accessible and comfortable.
      We pay attention to every detail and provide a comprehensive approach in a welcoming and comfortable environment, making every visit a positive one.</p>
      <Link className="main-button" to="/contact">Book Online</Link>
      {/* <a className="main-button" href="/contact">Book Online</a> */}
    </div>
  </section>
);

export default QuickParagraph;
