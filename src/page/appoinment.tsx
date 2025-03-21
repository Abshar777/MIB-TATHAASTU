import Appointment from "../components/global/appoiment"
import GlobalHero from "../components/global/globalHero"
import TestimonialSection from "../components/page-section/home/testimonials"
import WhyChooseUs from "../components/page-section/home/whyChoosUs"

const Appoinment = () => {
  return (
    <div>
      <GlobalHero index={0} pageTitle="Make an appointment" pageDescription="Appoinment" />
      <Appointment />
    </div>
  )
}

export default Appoinment
