import GlobalHero from "../components/global/globalHero"
import FAQs from "../components/page-section/home/Faqs"
import OurServices from "../components/page-section/home/ourServices"
import WhyChooseUs from "../components/page-section/home/whyChoosUs"
import TestimonialSection from "../components/page-section/home/testimonials"
import CaseStudySection from "../components/page-section/home/caseStudy"

const Services = () => {
  return (
    <div>
    <GlobalHero index={1} pageTitle="Services" pageDescription="Services" />
    <OurServices />
    <CaseStudySection />
    <WhyChooseUs />
    <FAQs />
    <TestimonialSection />
  </div>
  )
}

export default Services
