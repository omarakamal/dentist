import React from "react";
import "./AboutUs.css"; // per-page styles or import component-level css inside components

export default function AboutUs(){
  React.useEffect(()=> { document.title = "Mint Dental — About Us"; }, []);
  return (
    <section className="about-page">
      <div className="container">
        <h1>About Mint Dental Alaska</h1>
        <p>Placeholder content. We'll wire real components next.</p>
      </div>
    </section>
  );
}
