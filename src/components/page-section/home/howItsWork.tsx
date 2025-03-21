import React from "react";
import { howWeWork } from "../../../constants/howWeWork";
import { Link } from "react-router-dom";

const HowItWork: React.FC = () => {
  return (
    <div className="how-it-work">
      <div className="container">
        <div className="row align-items-center section-row">
          <div className="col-lg-6">
            {/* Section Title Start */}
            <div className="section-title">
              <h3 className="fadeInUp wow">{howWeWork.title}</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                {howWeWork.mainTitle}
              </h2>
            </div>
            {/* Section Title End */}
          </div>

          <div className="col-lg-6">
            {/* Section Button Start */}
            <div className="fadeInUp section-btn wow" data-wow-delay="0.2s">
              <Link to="/contact" className="btn-default">
                contact us
              </Link>
            </div>
            {/* Section Button End */}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            {/* How Work Step Box Start */}
            <div className="how-work-step-box">
              {howWeWork.steps.map((step, index) => (
                <div
                  key={index}
                  className="fadeInUp how-work-step-item wow"
                  data-wow-delay={`${index * 0.2}s`}
                >
                  <div className="how-work-step-no">
                    <h3>
                      <step.icon />
                    </h3>
                  </div>
                  <div className="how-work-step-content">
                    <h3>{`${String(index + 1).padStart(2, "0")}. ${step.title}`}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* How Work Step Box End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
