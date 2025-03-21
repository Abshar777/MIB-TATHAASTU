import { contact } from "../../constants/contact";

const FooterCTA = () => {
  return (
    <div className="footer-cta-box">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* Footer CTA Content Start */}
            <div className="footer-cta-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Get a free consultation
                </h2>
              </div>
              {/* Section Title End */}
            </div>
            {/* Footer CTA Content End */}
          </div>

          <div className="col-lg-6">
            {/* Footer CTA Button Start */}
            <div className="fadeInUp footer-cta-btn wow">
              <a href="#" className="btn-default btn-phone">
                <i className="fa-phone-volume fa-solid"></i> {contact.number}
              </a>
              <a href="#" className="btn-comment btn-default">
                <i className="fa-comment-dots fa-solid"></i> {contact.email}
              </a>
            </div>
            {/* Footer CTA Button End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCTA;
