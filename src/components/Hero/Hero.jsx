import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Welcome to Al Safa Dental Center</h1>
          <p>
            Gentle, professional dental care for the whole family in Bahrain
          </p>
          <a href="/contact" className="hero-button">
            Schedule Your Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
