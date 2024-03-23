import React, { useEffect } from "react";
import HeroSection from "./component/HeroSection";
import Contact from "./Contact";
import { useGlobalContext } from "./context";
import Roadmap from "./Roadmap";
import Services from "./Services";

const Home = () => {
  const { updateHomePage } = useGlobalContext();
  useEffect(() => updateHomePage(), []);
  return (
    <>
      <HeroSection />
      <Services />
      <Roadmap/>
      <Contact/>
    </>
  );
};

export default Home;
