import React from "react";
export default function Services(){
  React.useEffect(()=> { document.title = "Mint Dental — Services"; }, []);
  return (
    <section className="services-page">
      <div className="container">
        <h1>Services</h1>
        <p>List of services, cards, CTAs, etc.</p>
      </div>
    </section>
  );
}
