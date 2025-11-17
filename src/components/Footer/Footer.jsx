import React from "react";
import "./Footer.css";
import { HashLink } from 'react-router-hash-link';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            
            {/* <li><a href="/services#cleaning">Teeth Cleaning</a></li> */}
            <li><HashLink smooth to="/services#cleaning">Teeth Cleaning</HashLink></li>
            <li> <HashLink smooth to="/services#whitening">Whitening</HashLink></li>
            <li><a href="/services#implants">Root Canal</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li><a href="https://www.google.com/maps/place/Al+Safa+Dental+Center/@26.2275282,50.5415632,14.45z/data=!4m10!1m2!2m1!1sdentist+bahrain!3m6!1s0x3e49af16387171a7:0x857f1da448f71f4b!8m2!3d26.2320124!4d50.5713991!15sCg9kZW50aXN0IGJhaHJhaW5aESIPZGVudGlzdCBiYWhyYWlukgENZGVudGFsX2NsaW5pY5oBJENoZERTVWhOTUc5blMwVkpRMEZuU1VObU0zRnBiVGRuUlJBQqoBRRABKgsiB2RlbnRpc3QoADIfEAEiG-G3u-CUJa4tbZJtuRLAbO4NKNTcGgnmRUaXuzITEAIiD2RlbnRpc3QgYmFocmFpbuABAPoBBAgAEAw!16s%2Fg%2F11fpjp5j4f?hl=en&entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D" target="_blank">📍 Above Vision Safa Optics, Awal Building, 2nd Floor, Manama 323</a></li>
            <li><a href="tel:+97317483455">📞 1748 3455</a></li>
            <li>📧 info@smileclinic.com</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Meet Our Doctors</h4>
          <ul>
            <li>Dr. Jane Doe</li>
            <li>Dr. John Smith</li>
            <li>Dr. Amy Lee</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Al Safa Dental Center. All rights reserved.</p>
        <p>Designed by Omar</p>
      </div>
    </footer>
  );
}
