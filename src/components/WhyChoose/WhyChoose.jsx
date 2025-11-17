import './WhyChoose.css'
export default function WhyChoose() {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        <div className="why-choose-left">
          <h2>Why Choose <span>Al Safa Dental Center</span>?</h2>
          <p>
            We’re committed to providing top-quality care with a gentle,
            compassionate touch. Discover what makes our Anchorage dental office
            special.
          </p>
        </div>

        <div className="why-choose-right">
          <div className="why-card">
            {/* <img
              src="./Why-Choose-1.jpg"
              alt="Icon"
            /> */}
            <h3>Comprehensive Care</h3>
            <p>
              Complete dental services for all ages, from preventive to cosmetic
              and restorative treatments.
            </p>
          </div>

          <div className="why-card">
            {/* <img
              src="./Why-Choose-2.jpg"
              alt="Icon"
            /> */}
            <h3>Modern Technology</h3>
            <p>
              The latest dental tools ensure efficient, comfortable, and precise
              treatment for our patients.
            </p>
          </div>

          <div className="why-card">
            {/* <img
              src="./Why-Choose-3.jpg"
              alt="Icon"
            /> */}
            <h3>Patient Comfort</h3>
            <p>
              Sedation options and a cozy environment to make you feel relaxed
              every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
