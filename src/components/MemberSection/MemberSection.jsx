import React from "react";
import "./MemberSection.css";

const MemberSection = ({image, name, descriptionP1,descriptionP2,descriptionP3, index}) => {
  const isReverse = index % 2 === 0;
  return (
  <section id="member-section">
    <div className={`container ${isReverse ? 'reversed' : ''}`}>
      <div className="text-container">
        <h2>Meet Dr. {name}</h2>
        {/* <img className="signature" src="https://leducdentalcentre.com/wp-content/uploads/2024/08/1c78c8_d1bccac3a22542a999c94fe6ca1af706mv2.webp" alt="Signature" /> */}
        <h3>Your Trusted Dentist</h3>
        <p>{descriptionP1}</p>
        <p>{descriptionP2}</p>
        <p>{descriptionP3}</p>
      </div>
      <div className="image-container">
        <img src={image} alt={name}/>
      </div>
    </div>




  </section>
)};

export default MemberSection;
