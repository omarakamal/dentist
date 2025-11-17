import React, { useEffect } from "react";
import Service from "../../components/Service/Service";
import "./Services.css";
import ContactSection from "../../components/ContactSection/ContactSection";

/**
 * Services page - maps a services array into Service components
 */
const servicesData = [
  {
    id: "cleaning",
    title: "Teeth Cleaning",
    description:
      "Professional dental cleaning to remove plaque, tartar, and polish your teeth. Includes a full hygiene exam and personalized home-care advice.",
    image:
      "./Service-1.jpg",
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    description:
      "Safe and effective whitening options — in-office or take-home kits — to brighten your smile several shades with minimal sensitivity.",
    image:
      "./service-3.avif",
  },
  {
    id: "implants",
    title: "Dental Implants",
    description:
      "Stable, long-lasting implants to replace missing teeth. We handle planning, placement, and restoration with modern implant systems.",
    image:
      "./Service-2.jpg",
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description:
      "Porcelain veneers, crowns, and smile design to improve shape, color, and alignment — customized to your facial aesthetics.",
    image:
      "./Service-4.jpg",
  },
];

export default function Services() {
  useEffect(() => {
    document.title = "Al Safa Dental Center — Services";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p className="lead">
            Comprehensive dental care with a gentle touch. Click any service to
            book or get in touch. We can Provide world class service. Al Hamed Dental takes all forms
            of insurance and providers. Contact us today to book an appointment for the services below or
            any additional services we provide.
          </p>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          {servicesData.map((svc, i) => (
            <Service
              key={svc.id}
              index={i}
              title={svc.title}
              description={svc.description}
              image={svc.image}
              ctaLabel="Book Service"
              ctaHref="/contact"
              id={svc.id}
            />
          ))}
        </div>
      </section>

      <ContactSection/>
    </main>
  );
}
