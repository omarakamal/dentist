import React from "react";
export default function Contact(){
  React.useEffect(()=> { document.title = "Mint Dental — Contact"; }, []);
  return (
    <section className="contact-page">
      <div className="container">
        <h1>Contact Us</h1>
        <p>Contact form component goes here (name, phone, email, message, recaptcha etc.)</p>
      </div>
    </section>
  );
}
