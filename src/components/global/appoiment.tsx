import React from "react";

const Appointment = () => {
  return (
    <div  className="our-appointment">
      <div className="container">
        <div className="row">
          <div id="appointment"  className="col-lg-12">
            <div className="our-appointment-box">
              <div className="appointment-form">
                <form id="appointmentForm" action="#" method="POST" data-toggle="validator" className="fadeInUp wow" data-wow-delay="0.25s">
                  <div className="row">
                    <div className="col-md-6 form-group mb-4">
                      <input type="text" name="fname" className="form-control" id="fname" placeholder="First Name" required />
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="col-md-6 form-group mb-4">
                      <input type="text" name="lname" className="form-control" id="lname" placeholder="Last Name" required />
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="col-md-12 form-group mb-4">
                      <input type="email" name="email" className="form-control" id="email" placeholder="Email Address" required />
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="col-md-12 form-group mb-4">
                      <input type="text" name="phone" className="form-control" id="phone" placeholder="Phone Number" required />
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="col-md-6 form-group mb-4">
                      <select name="services" className="form-control form-select" id="services" required>
                        <option value="" disabled selected>Select Service</option>
                        <option value="manual_therapy">personalized individual therapy</option>
                        <option value="chronic_pain">supportive couples counseling</option>
                        <option value="hand_therapy">youth and adolescent counseling</option>
                        <option value="sports_therapy">anxiety and depression support</option>
                        <option value="cupping_therapy">stress and anger management</option>
                        <option value="laser_therapy">mindfulness and meditation practices</option>
                      </select>
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="col-md-6 form-group mb-5">
                      <input type="date" name="date" className="form-control" id="date" required />
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-form-btn">
                        <button type="submit" className="btn-default">book an appointment</button>
                        <div id="msgSubmit" className="h3 hidden"></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="our-appointment-content">
                <div className="section-title">
                  <h3 className="fadeInUp wow">appointment</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">Make an appointment</h2>
                  <p className="fadeInUp wow" data-wow-delay="0.2s">Schedule your handyman service with ease. Choose a date and time that works best for you.</p>
                </div>
                <div className="appointment-content-body">
                  <div className="appointment-item fadeInUp wow" data-wow-delay="0.4s">
                    <div className="icon-box">
                      <img src="images/icon-appointment-item-1.svg" alt="" />
                    </div>
                    <div className="appointment-item-content">
                      <h3>Customer Services</h3>
                      <p>+91 - 123 456 7890</p>
                    </div>
                  </div>
                  <div className="appointment-item fadeInUp wow" data-wow-delay="0.6s">
                    <div className="icon-box">
                      <img src="images/icon-appointment-item-2.svg" alt="" />
                    </div>
                    <div className="appointment-item-content">
                      <h3>Opening Hours</h3>
                      <p>Mon - Sat (09:00 - 21:00 Sunday (Closed))</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div  className="col-lg-12">
            <div className="our-partner">
              <div className="our-partner-content">
                <div className="section-title">
                  <h3 className="fadeInUp wow">our partner</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">In collaboration with</h2>
                  <p className="fadeInUp wow" data-wow-delay="0.2s">Our trusted partner provides compassionate mental health therapy and counseling services to support.</p>
                </div>
              </div>
              <div className="partner-logo-box">
                {[1, 2, 3, 1, 2, 3].map((num, index) => (
                  <div key={index} className="fadeInUp partner-logo-image wow" data-wow-delay={`${index * 0.2}s`}>
                    <img src={`images/partner-logo-${num}.svg`} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
