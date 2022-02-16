import React from "react";

import Header from "../../components/Header";
import LandingSection from "../../components/LandingSection";
import QuoteSection from "../../components/QuoteSection";
import AboutSection from "../../components/AboutSection";
import SkillSection from "../../components/SkillSection";
import ContactSection from "../../components/ContactSection";
import AudioPlayer from "../../components/AudioPlayer";
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
      <QuoteSection
        quote="Do not go where the path may lead, go instead where there is no path and leave a trail."
        author="Ralph Waldo Emerson"
      />
      <SkillSection />
      <ContactSection />
      <Footer/>
    </React.Fragment>
  );
};

export default Home;
