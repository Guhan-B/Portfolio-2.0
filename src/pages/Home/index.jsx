import React from "react";

import Header from "../../components/Header";
import LandingSection from "../../components/LandingSection";
import QuoteSection from "../../components/QuoteSection";
import AboutSection from "../../components/AboutSection";
import SkillSection from "../../components/SkillSection";
import ProjectSection from "../../components/ProjectSection";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import ScrollProgress from "../../components/ScrollProgress";

const Home = () => {
  return (
    <React.Fragment>
      <ScrollProgress/>
      <Header />
      <LandingSection />
      <AboutSection />
      <QuoteSection quote="Life is ten percent what happens to you and ninety percent how you respond to it." author="Charles Swindoll"/>
      <ProjectSection/>
      {/* <SkillSection /> */}
      <ContactSection />
      <Footer/>
    </React.Fragment>
  );
};

export default Home;
