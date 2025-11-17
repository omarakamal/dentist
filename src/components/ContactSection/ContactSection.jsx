import React from "react";
import "./ContactSection.css";

const ContactSection = () => (
  <section id="contact-section">
    <div className="contact-container">
      <div className="clinic-info">
        <h2>Visit Our Clinic</h2>
        <p><strong>Location:</strong> Above Vision Safa Optics, Awal Building, 2nd Floor, Manama 323</p>
        <p><strong>Phone:</strong> <a href="tel:+97317483455">1748 3455</a></p>
        <p><strong>WhatsApp:</strong> <a href="https://wa.me/+97317483455" target="_blank">Chat on WhatsApp</a></p>
        <p><strong>Hours:</strong></p>
        <ul>
          <li>Sat-Thu: 1pm – 9pm</li>
          <li>Fri: Closed</li>
        </ul>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.954805835835!2d50.56789577545888!3d26.230657977060318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49af63d4481083%3A0xe5140214e72afc5b!2sAl%20hamad%20Dental%20Centet!5e0!3m2!1sen!2sbh!4v1754131075136!5m2!1sen!2sbh"
          width="100%"
          height="100%"
          style={{border:0}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
);

export default ContactSection;
