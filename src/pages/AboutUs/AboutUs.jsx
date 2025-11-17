import {useEffect} from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import QuickParagraph from "../../components/QuickParagraph/QuickParagraph";
import ParallaxSection from "../../components/ParallaxSection/ParallaxSection";
import MemberSection from "../../components/MemberSection/MemberSection";
import ContactSection from "../../components/ContactSection/ContactSection";

const AboutUs = () => {

  const doctorsInfo = [
    {
      name:'Romy Ajay Abraham',
      image:'./doctor-1.webp',
      descriptionP1:'Dr. Salman Jivani, your trusted dentist at Leduc Dental Centre, is passionate about helping you achieve your healthiest, brightest smile possible. Since graduating with his Doctor of Dental Surgery from the University of Alberta in 2013, Dr. Jivani has provided gentle, comprehensive dental care.',
      descriptionP2:'With a focus on general dentistry, including fillings, root canals, extractions, and crowns/bridges, Dr. Jivani is committed to delivering care tailored to your needs.',
      descriptionP3:'Beyond his technical skills, Dr. Jivani values the relationships he builds with his patients, celebrating their milestones and being a part of their journey to optimal dental health. At Leduc Dental Centre, he strives to create a welcoming environment where every patient feels like family.'

    },
    {
      name:'Sumaiya Abdul Sukoor',
      image:'./doctor-2.webp',
      descriptionP1:'Dr. Salman Jivani, your trusted dentist at Leduc Dental Centre, is passionate about helping you achieve your healthiest, brightest smile possible. Since graduating with his Doctor of Dental Surgery from the University of Alberta in 2013, Dr. Jivani has provided gentle, comprehensive dental care.',
      descriptionP2:'With a focus on general dentistry, including fillings, root canals, extractions, and crowns/bridges, Dr. Jivani is committed to delivering care tailored to your needs.',
      descriptionP3:'Beyond his technical skills, Dr. Jivani values the relationships he builds with his patients, celebrating their milestones and being a part of their journey to optimal dental health. At Leduc Dental Centre, he strives to create a welcoming environment where every patient feels like family.'

    }
  ]

  useEffect(()=>{document.title = 'Al Safa Dental Center - About Us'},[])
  return (
    <>
      <HeroSection />
      <QuickParagraph />
      <ParallaxSection />
      <MemberSection {...doctorsInfo[0]}  index={1} />
      <MemberSection {...doctorsInfo[1]}  index={2} />
      <ContactSection />
    </>
  );
};

export default AboutUs;
