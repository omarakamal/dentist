import React from "react";
import HomePageContent from "../components/HomePage/HomePage"; // or the file you already created
export default function HomePage(){ 
  // optionally set title inside component
  React.useEffect(()=> { document.title = "Mint Dental — Home"; }, []);
  return <HomePageContent />;
}
