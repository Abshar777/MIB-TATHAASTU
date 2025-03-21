import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div className="page-contact-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-form-box">
              <div className="section-title">
                <h3 className="wow fadeInUp">contact us</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Get in touch with me
                </h2>
              </div>
              <div className="contact-form">
                <form
                  id="contactForm"
                  action="#"
                  method="POST"
                  data-toggle="validator"
                  className="wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  <div className="row">
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="fname"
                        className="form-control"
                        id="fname"
                        placeholder="First name"
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="lname"
                        className="form-control"
                        id="lname"
                        placeholder="Last name"
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        id="phone"
                        placeholder="Phone number"
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="E-mail address"
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group col-md-12 mb-5">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        rows={4}
                        placeholder="Write message"
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="btn-default">
                        submit message
                      </button>
                      <div id="msgSubmit" className="h3 hidden"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="contact-info-box">
              <div className="contact-info-item wow fadeInUp">
                <div className="icon-box">
                  <img src="images/icon-location.svg" alt="Location Icon" />
                </div>
                <div className="contact-info-content">
                  <h3>our address</h3>
                  <p>123 Example Street London, EC1A 1AA UK</p>
                </div>
              </div>
              <div className="contact-info-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="icon-box">
                  <img src="images/icon-phone.svg" alt="Phone Icon" />
                </div>
                <div className="contact-info-content">
                  <h3>phone number</h3>
                  <p>(+05) 698 - 548 - 6354</p>
                  <p>(+07) 358 - 879 - 3257</p>
                </div>
              </div>
              <div className="contact-info-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="icon-box">
                  <img src="images/icon-mail.svg" alt="Mail Icon" />
                </div>
                <div className="contact-info-content">
                  <h3>e-mail support</h3>
                  <p>info@domainname.com</p>
                  <p>info@domainname.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
