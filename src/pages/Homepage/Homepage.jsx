import Hero from "../../components/Hero/Hero";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import Testimonials from "../../components/Testimonials/Testimonials";
import MeetTeam from "../../components/MeetTeam/MeetTeam";
import { useState, useEffect } from "react";
import ContactSection from "../../components/ContactSection/ContactSection";



export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

    useEffect(()=> { document.title = "Al Safa Dental Center — Home"; }, []);
  

  return (
    <div>
      
      <Hero />
      <WelcomeSection />
      <WhyChoose />
      <ContactSection/>
      <MeetTeam />
      <Testimonials />
    </div>
  );
}
