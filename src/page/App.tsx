import { Hero } from "../components/page-section/home/hero";
import { AboutUs } from "../components/page-section/home/aboutUs";
import OurServices from "../components/page-section/home/ourServices";
import WhyChooseUs from "../components/page-section/home/whyChoosUs";
import WhatWeDo from "../components/page-section/home/whatWeDo";
import CaseStudySection from "../components/page-section/home/caseStudy";
import HowItWork from "../components/page-section/home/howItsWork";
import CtaSection from "../components/page-section/home/cta";
import TestimonialSection from "../components/page-section/home/testimonials";
import FAQs from "../components/page-section/home/Faqs";
import Blog from "../components/page-section/home/Blog";
import AppointmentForm from "../components/global/appoiment";

// Register ScrollTrigger immediately after importing

function App() {
  // Add dependency array to useGSAP

  return (
    <>
      <Hero />
      <AboutUs />
      <OurServices />
      <WhyChooseUs />
      <WhatWeDo />
      <CaseStudySection />
      <HowItWork />
      <CtaSection />
      <TestimonialSection />
      <FAQs />
      <Blog />
      <AppointmentForm />
    </>
  );
}

export default App;
