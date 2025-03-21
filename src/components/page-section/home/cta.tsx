import React from "react";
import { Link } from "react-router-dom";

const CtaSection: React.FC = () => {
  return (
    <div className="cta-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* CTA Box Start */}
            <div className="cta-box">
              {/* CTA Box Image Start */}
              <div className="cta-box-image">
                <img src="images/cta-img.png" alt="" />
              </div>
              {/* CTA Box Image End */}

              {/* CTA Box Content Start */}
              <div className="cta-box-content">
                <div className="section-title">
                  <h3 className="fadeInUp wow">join today</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Book a therapy session and begin thriving
                  </h2>
                  <p className="fadeInUp wow" data-wow-delay="0.2s">
                    Schedule your appointment now and start building the life
                    you deserve.
                  </p>
                </div>

                <div className="cta-box-btn fadeInUp wow">
                  <Link to="/appoinment" className="btn-default">
                    book appointment
                  </Link>
                </div>
              </div>
              {/* CTA Box Content End */}
            </div>
            {/* CTA Box End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
