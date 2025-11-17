import './Testimonials.css'
export default function Testimonials() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <h2>What Our Patients Say</h2>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">
              "Highly recommend Dr. Rashmi for anything related to dental. My go to dentist for anything big or small dental issues. Appreciate her patience and extreme care.
"
            </p>
            <div className="testimonial-name">– Jaskiran Surve</div>
            <div className="testimonial-stars">★★★★★</div>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-text">
              "Dr. Rashmi is the best dentist I had. An amazing and caring person who pay attention to all the details of dental care. It's because of her I have a great and healthy teeth. I advise you to go to her."
            </p>
            <div className="testimonial-name">– Ahmed Faisal</div>
            <div className="testimonial-stars">★★★★★</div>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-text">
              "Hands down the best dentist in the kingdom. Very courteous, very professional and caring. Keep up the great work Dr.
"
            </p>
            <div className="testimonial-name">– Bharath Jayakumar Manipal</div>
            <div className="testimonial-stars">★★★★★</div>
          </div>
        </div>
      </div>
    </section>
  );
}
