import GlobalHero from "../components/global/globalHero";
import OurApproach from "../components/page-section/about/ourApproch";
import OurBenifit from "../components/page-section/about/ourBenifit";
import OurTeam from "../components/page-section/about/OurTeam";
import AboutUs from "../components/page-section/home/aboutUs";
import WhatWeDo from "../components/page-section/home/whatWeDo";
import WhyChooseUs from "../components/page-section/home/whyChoosUs";

const About = () => {
  // Add dependency array to useGSAP
  return (
    <div>
      <GlobalHero index={1} pageTitle="About Us" pageDescription="About Us" />
      <AboutUs />
      <OurApproach />
      <WhyChooseUs />
      <WhatWeDo />
      <OurTeam />
      <OurBenifit />
    </div>
  );
};

export default About;
