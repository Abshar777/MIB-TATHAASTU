import GlobalHero from "../components/global/globalHero"
import ContactUsForm from "../components/page-section/contactUs/contactUsForm"

const ContactUs = () => {
  return (
    <div>
      <GlobalHero index={2} pageTitle="Contact Us" pageDescription="Contact Us" />
      <ContactUsForm />
    </div>
  );
};

export default ContactUs;
