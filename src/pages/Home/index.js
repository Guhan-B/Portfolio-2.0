import React from "react";

import Header from "../../components/Header";
import LandingSection from "../../components/LandingSection";
import QuoteSection from "../../components/QuoteSection";
import AboutSection from "../../components/AboutSection";
import SkillSection from "../../components/SkillSection";
import ProjectPlaceholder from "../../components/ProjectPlaceholder";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <LandingSection />
      <QuoteSection
        quote="Life is ten percent what happens to you and ninety percent how you respond to it."
        author="Charles Swindoll"
      />
      <AboutSection />
      <ProjectPlaceholder/>
      <SkillSection />
      <ContactSection />
      <Footer/>
    </React.Fragment>
  );
};

export default Home;
