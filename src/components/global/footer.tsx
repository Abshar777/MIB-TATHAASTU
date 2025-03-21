import { contact } from "../../constants/contact";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-logo">
              <h1
                style={{ color: "#9B9A84" }}
                className="text-[#9B9A84] text-2xl font-bold"
              >
                MI<span className="text-black">B</span>
              </h1>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="about-footer">
              <div className="section-title">
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  {contact.quet}
                </h2>
              </div>

              <div className="footer-contact-box">
                <div className="footer-contact-item">
                  <p>Phone Number</p>
                  <h3 className="w-full text-nowrap">{contact.number}</h3>
                </div>
                <div className="footer-contact-item">
                  <p>Email Address</p>
                  <h3>{contact.email}</h3>
                </div>
                <div className="footer-contact-item">
                  <p>Location</p>
                  <h3>{contact.address}</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="footer-social-links">
              <h3>Join our community</h3>
              <p>Join Us Today for Resources, Insight & Connection</p>
              <ul>
                <li>
                  <a href={contact.facebook}>
                    <i className="fa-brands fa-pinterest-p"></i>
                  </a>
                </li>
                <li>
                  <a href={contact.twitter}>
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href={contact.facebook}>
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href={contact.instagram}>
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="index-2.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="services.html">Services</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-copyright-text">
                <p>Copyright © 2024 All Rights Reserved By Abshar777.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
